import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  PrimaryRemoved,
  PrimarySet,
  PrimarySetByDelegateCash
} from "../generated/PrimaryPFP/PrimaryPFP"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createPrimaryRemovedEvent(
  from: Address,
  contract_: Address,
  tokenId: BigInt
): PrimaryRemoved {
  let primaryRemovedEvent = changetype<PrimaryRemoved>(newMockEvent())

  primaryRemovedEvent.parameters = new Array()

  primaryRemovedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  primaryRemovedEvent.parameters.push(
    new ethereum.EventParam("contract_", ethereum.Value.fromAddress(contract_))
  )
  primaryRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return primaryRemovedEvent
}

export function createPrimarySetEvent(
  to: Address,
  contract_: Address,
  tokenId: BigInt
): PrimarySet {
  let primarySetEvent = changetype<PrimarySet>(newMockEvent())

  primarySetEvent.parameters = new Array()

  primarySetEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  primarySetEvent.parameters.push(
    new ethereum.EventParam("contract_", ethereum.Value.fromAddress(contract_))
  )
  primarySetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return primarySetEvent
}

export function createPrimarySetByDelegateCashEvent(
  to: Address,
  contract_: Address,
  tokenId: BigInt
): PrimarySetByDelegateCash {
  let primarySetByDelegateCashEvent = changetype<PrimarySetByDelegateCash>(
    newMockEvent()
  )

  primarySetByDelegateCashEvent.parameters = new Array()

  primarySetByDelegateCashEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  primarySetByDelegateCashEvent.parameters.push(
    new ethereum.EventParam("contract_", ethereum.Value.fromAddress(contract_))
  )
  primarySetByDelegateCashEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return primarySetByDelegateCashEvent
}
