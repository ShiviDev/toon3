import {
  addedBook as addedBookEvent,
  addedChapter as addedChapterEvent,
  donationMade as donationMadeEvent,
  donationsWithDrawn as donationsWithDrawnEvent,
  userOnboarded as userOnboardedEvent,
  userSubscribed as userSubscribedEvent
} from "../generated/Creator/Creator"
import {
  addedBook,
  addedChapter,
  donationMade,
  donationsWithDrawn,
  userOnboarded,
  userSubscribed
} from "../generated/schema"

export function handleaddedBook(event: addedBookEvent): void {
  let entity = new addedBook(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.bookId = event.params.bookId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleaddedChapter(event: addedChapterEvent): void {
  let entity = new addedChapter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.bookId = event.params.bookId
  entity.chapterId = event.params.chapterId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handledonationMade(event: donationMadeEvent): void {
  let entity = new donationMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.trustee = event.params.trustee
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handledonationsWithDrawn(event: donationsWithDrawnEvent): void {
  let entity = new donationsWithDrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserOnboarded(event: userOnboardedEvent): void {
  let entity = new userOnboarded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserSubscribed(event: userSubscribedEvent): void {
  let entity = new userSubscribed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.subscriber = event.params.subscriber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
