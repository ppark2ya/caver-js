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

export type WeightedMultiSigOptionsObject = { threshold?: number; weigths?: number[]; weight?: number[] }

export default class WeightedMultiSigOptions {
    static fromObject(options: WeightedMultiSigOptionsObject): WeightedMultiSigOptions

    constructor(threshold: number, weights: Array<number>)

    private _threshold: number
    public threshold: number
    private _weights: number[]
    public weights: number[]

    isEmpty(): boolean
}
