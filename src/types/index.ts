// import { ChangeEventHandler, MouseEventHandler } from "svelte/elements";

export interface ICandidate {
  k: number;
  v: string;
};

export interface ICandidates extends Array<ICandidate>{};

export type TInputValue = string;
// export type TChangeEvent = ChangeEventHandler<HTMLInputElement>;
// export type TMouseEvent = MouseEventHandler<HTMLInputElement>;