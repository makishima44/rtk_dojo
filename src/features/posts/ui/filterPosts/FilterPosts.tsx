"use client";
import s from "./FilterPosts.module.css";

import { setSelectedUserId } from "@/features/users/model/userSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const FilterPosts = () => {
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
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value=''>All users</option>
      </select>
    </div>
  );
};
