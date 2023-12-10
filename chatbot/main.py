from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
import os
import tempfile
import speech_recognition as sr
from translate import Translator
from pydub import AudioSegment

app = Flask(__name__)
socketio = SocketIO(app)

def convert_mp3_to_wav(mp3_file_path, wav_file_path):
    audio = AudioSegment.from_mp3(mp3_file_path)
    audio.export(wav_file_path, format="wav")

def transcribe_audio(audio_file_path, target_language='ja'):
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file_path) as source:
        audio_data = recognizer.record(source)

    try:
        # Recognize speech using Google Speech Recognition
        text = recognizer.recognize_google(audio_data)
        return text
    except sr.UnknownValueError:
        print("Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print(f"Could not request results; {e}")

    return None

def translate_text(text, target_language='ja'):
    translator = Translator(to_lang=target_language)
    translation = translator.translate(text)
    return translation

@app.route('/')
def index():
    return 'WebSocket server is running!'

@socketio.on('audio_upload')
def handle_audio_upload(audio_data):
    temp_mp3_file = tempfile.NamedTemporaryFile(suffix=".mp3", delete=False)
    audio_file_path = temp_mp3_file.name

    try:
        audio_data.save(audio_file_path)
        temp_wav_file = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)
        convert_mp3_to_wav(audio_file_path, temp_wav_file.name)

        transcribed_text = transcribe_audio(temp_wav_file.name)
        if transcribed_text:
            translated_text = translate_text(transcribed_text)
            response = {'transcribed_text': transcribed_text, 'translated_text': translated_text}
            emit('transcription_result', response)
        else:
            emit('transcription_result', {'error': 'Unable to transcribe audio'})
    finally:
        os.remove(audio_file_path)
        os.remove(temp_wav_file.name)

if __name__ == '__main__':
    socketio.run(app, debug=True)


