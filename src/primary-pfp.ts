import {
  Initialized as InitializedEvent,
  PrimaryRemoved as PrimaryRemovedEvent,
  PrimarySet as PrimarySetEvent,
  PrimarySetByDelegateCash as PrimarySetByDelegateCashEvent
} from "../generated/PrimaryPFP/PrimaryPFP"
import {
  Initialized,
  PrimaryRemoved,
  PrimarySet,
  PrimarySetByDelegateCash
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimaryRemoved(event: PrimaryRemovedEvent): void {
  let entity = new PrimaryRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.contract_ = event.params.contract_
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimarySet(event: PrimarySetEvent): void {
  let entity = new PrimarySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.contract_ = event.params.contract_
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrimarySetByDelegateCash(
  event: PrimarySetByDelegateCashEvent
): void {
  let entity = new PrimarySetByDelegateCash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.contract_ = event.params.contract_
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
