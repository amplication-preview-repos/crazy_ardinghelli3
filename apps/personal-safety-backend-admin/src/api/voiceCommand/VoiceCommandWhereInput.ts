import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoiceCommandWhereInput = {
  command?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};