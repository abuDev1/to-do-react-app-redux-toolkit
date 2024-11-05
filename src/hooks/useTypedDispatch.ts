import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux";


export const useTypedDispatch = () => useDispatch<AppDispatch>()