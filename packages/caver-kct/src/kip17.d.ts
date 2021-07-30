/*
    Copyright 2021 The caver-js Authors
    This file is part of the caver-js library.

    The caver-js library is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The caver-js library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with the caver-js. If not, see <http://www.gnu.org/licenses/>.
*/

import BigNumber from 'bignumber.js'
import Contract, { SendOptions, SendOptionsWithFormatter } from '../../caver-contract/src'
import { TransactionReceipt } from '../../caver-rtm/src'
import { AbiItem } from '../../caver-utils/src'
import { Amount, Data, TokenInfoObject } from './kip7'

export interface KIP17DetectedObject {
    IKIP17?: boolean
    IKIP17Metadata?: boolean
    IKIP17Enumerable?: boolean
    IKIP17Mintable?: boolean
    IKIP17MetadataMintable?: boolean
    IKIP17Burnable?: boolean
    IKIP17Pausable?: boolean
}

export default class KIP17 extends Contract {
    constructor(tokenAddress: string, abi?: AbiItem[])

    static byteCode: string

    static deploy(tokenInfo: TokenInfoObject, sendOptions?: string | SendOptionsWithFormatter): Promise<any>
    static deploy(tokenInfo: TokenInfoObject, sendOptions?: string | SendOptions): Promise<TransactionReceipt>
    static detectInterface(contractAddress: string): Promise<KIP17DetectedObject>
    clone: Contract['clone']
    detectInterface(): Promise<KIP17DetectedObject>
    supportsInterface(interfaceId: string): Promise<boolean>
    name(): Promise<string>
    symbol(): Promise<string>
    tokenURI(tokenId: Amount): Promise<string>
    totalSupply(): Promise<BigNumber>
    tokenOfOwnerByIndex(owner: string, index: string | number | BigNumber): Promise<BigNumber>
    tokenByIndex(index: string | number | BigNumber): Promise<BigNumber>
    balanceOf(account: string): Promise<BigNumber>
    ownerOf(tokenId: Amount): Promise<string>
    getApproved(tokenId: Amount): Promise<string>
    isApprovedForAll(owner: string, operator: string): Promise<boolean>
    isMinter(account: string): Promise<boolean>
    paused(): Promise<boolean>
    isPauser(account: string): Promise<boolean>
    approve(to: string, tokenId: Amount, sendParam?: SendOptionsWithFormatter): Promise<any>
    approve(to: string, tokenId: Amount, sendParam?: SendOptions): Promise<TransactionReceipt>
    setApprovalForAll(to: string, approved: boolean, sendParam?: SendOptionsWithFormatter): Promise<any>
    setApprovalForAll(to: string, approved: boolean, sendParam?: SendOptions): Promise<TransactionReceipt>
    transferFrom(from: string, to: string, tokenId: Amount, sendParam?: SendOptionsWithFormatter): Promise<any>
    transferFrom(from: string, to: string, tokenId: Amount, sendParam?: SendOptions): Promise<TransactionReceipt>
    safeTransferFrom(from: string, to: string, tokenId: Amount, sendParam?: SendOptionsWithFormatter): Promise<any>
    safeTransferFrom(from: string, to: string, tokenId: Amount, sendParam?: SendOptions): Promise<TransactionReceipt>
    safeTransferFrom(from: string, to: string, tokenId: Amount, data: Data, sendParam?: SendOptionsWithFormatter): Promise<any>
    safeTransferFrom(from: string, to: string, tokenId: Amount, data: Data, sendParam?: SendOptions): Promise<TransactionReceipt>
    addMinter(account: string, sendParam?: SendOptionsWithFormatter): Promise<any>
    addMinter(account: string, sendParam?: SendOptions): Promise<TransactionReceipt>
    renounceMinter(sendParam?: SendOptionsWithFormatter): Promise<any>
    renounceMinter(sendParam?: SendOptions): Promise<TransactionReceipt>
    mint(to: string, tokenId: Amount, sendParam?: SendOptionsWithFormatter): Promise<any>
    mint(to: string, tokenId: Amount, sendParam?: SendOptions): Promise<TransactionReceipt>
    mintWithTokenURI(to: string, tokenId: Amount, tokenURI: string, sendParam?: SendOptionsWithFormatter): Promise<any>
    mintWithTokenURI(to: string, tokenId: Amount, tokenURI: string, sendParam?: SendOptions): Promise<TransactionReceipt>
    burn(tokenId: Amount, sendParam?: SendOptionsWithFormatter): Promise<any>
    burn(tokenId: Amount, sendParam?: SendOptions): Promise<TransactionReceipt>
    pause(sendParam?: SendOptionsWithFormatter): Promise<any>
    pause(sendParam?: SendOptions): Promise<TransactionReceipt>
    unpause(sendParam?: SendOptionsWithFormatter): Promise<any>
    unpause(sendParam?: SendOptions): Promise<TransactionReceipt>
    addPauser(account: string, sendParam?: SendOptionsWithFormatter): Promise<any>
    addPauser(account: string, sendParam?: SendOptions): Promise<TransactionReceipt>
    renouncePauser(sendParam?: SendOptionsWithFormatter): Promise<any>
    renouncePauser(sendParam?: SendOptions): Promise<TransactionReceipt>
}
