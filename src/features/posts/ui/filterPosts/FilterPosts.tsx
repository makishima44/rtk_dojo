"use client";
import s from "./FilterPosts.module.css";

import { setSelectedUserId } from "@/features/users/model/userSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const FilterPosts = () => {
  const USER_IDS: (number | "")[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ""];

  const dispatch = useDispatch();

  const selectedId = useSelector((state: RootState) => state.users.selectedUserId);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "") {
      dispatch(setSelectedUserId(null));
    } else {
      dispatch(setSelectedUserId(Number(value)));
    }
  };

  return (
    <div>
      <label htmlFor='id'>select id</label>
      <select id='userId' value={selectedId ?? ""} onChange={handleChange} className={s.select}>
        {USER_IDS.map((id) => (
          <option key={id} value={id} className={s.option}>
            {id === "" ? "All users" : id}
          </option>
        ))}
      </select>
    </div>
  );
};
