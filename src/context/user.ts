import { atomWithStorage } from "jotai/utils";

import { IUser } from "@/types/entity";

export const userAtom = atomWithStorage<IUser | null>("user", null);
