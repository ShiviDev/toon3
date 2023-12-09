import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  addedBook,
  addedChapter,
  donationMade,
  donationsWithDrawn,
  userOnboarded,
  userSubscribed
} from "../generated/Creator/Creator"

export function createaddedBookEvent(
  creator: Address,
  bookId: BigInt
): addedBook {
  let addedBookEvent = changetype<addedBook>(newMockEvent())

  addedBookEvent.parameters = new Array()

  addedBookEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  addedBookEvent.parameters.push(
    new ethereum.EventParam("bookId", ethereum.Value.fromUnsignedBigInt(bookId))
  )

  return addedBookEvent
}

export function createaddedChapterEvent(
  creator: Address,
  bookId: BigInt,
  chapterId: BigInt
): addedChapter {
  let addedChapterEvent = changetype<addedChapter>(newMockEvent())

  addedChapterEvent.parameters = new Array()

  addedChapterEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  addedChapterEvent.parameters.push(
    new ethereum.EventParam("bookId", ethereum.Value.fromUnsignedBigInt(bookId))
  )
  addedChapterEvent.parameters.push(
    new ethereum.EventParam(
      "chapterId",
      ethereum.Value.fromUnsignedBigInt(chapterId)
    )
  )

  return addedChapterEvent
}

export function createdonationMadeEvent(
  creator: Address,
  trustee: Address,
  amount: BigInt
): donationMade {
  let donationMadeEvent = changetype<donationMade>(newMockEvent())

  donationMadeEvent.parameters = new Array()

  donationMadeEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  donationMadeEvent.parameters.push(
    new ethereum.EventParam("trustee", ethereum.Value.fromAddress(trustee))
  )
  donationMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationMadeEvent
}

export function createdonationsWithDrawnEvent(
  creator: Address,
  amount: BigInt
): donationsWithDrawn {
  let donationsWithDrawnEvent = changetype<donationsWithDrawn>(newMockEvent())

  donationsWithDrawnEvent.parameters = new Array()

  donationsWithDrawnEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  donationsWithDrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationsWithDrawnEvent
}

export function createuserOnboardedEvent(
  user: Address,
  timestamp: BigInt
): userOnboarded {
  let userOnboardedEvent = changetype<userOnboarded>(newMockEvent())

  userOnboardedEvent.parameters = new Array()

  userOnboardedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userOnboardedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return userOnboardedEvent
}

export function createuserSubscribedEvent(
  creator: Address,
  subscriber: Address
): userSubscribed {
  let userSubscribedEvent = changetype<userSubscribed>(newMockEvent())

  userSubscribedEvent.parameters = new Array()

  userSubscribedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  userSubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return userSubscribedEvent
}
