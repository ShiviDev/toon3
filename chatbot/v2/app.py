from flask import Flask, request, jsonify
import os
import tempfile
import speech_recognition as sr
from translate import Translator
from pydub import AudioSegment

app = Flask(__name__)

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
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")

    return None

def translate_text(text, target_language='ja'):
    translator = Translator(to_lang=target_language)
    translation = translator.translate(text)
    return translation

@app.route('/process_audio', methods=['POST'])
def process_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400

    audio_file = request.files['audio']

    if audio_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if audio_file:
        _, temp_wav_file = tempfile.mkstemp(suffix=".wav")
        audio_file.save(temp_wav_file)

        try:
            transcribed_text = transcribe_audio(temp_wav_file)
            if transcribed_text:
                translated_text = translate_text(transcribed_text)
                response = {'transcribed_text': transcribed_text, 'translated_text': translated_text}
                return jsonify(response), 200
            else:
                return jsonify({'error': 'Unable to transcribe audio'}), 500
        finally:
            os.remove(temp_wav_file)

if __name__ == '__main__':
    app.run(debug=True)