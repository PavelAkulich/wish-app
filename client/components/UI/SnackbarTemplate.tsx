// import { useAppDispatch, useAppSelector } from './../../store/store';
import SnackbarUnstyled, {
  SnackbarCloseReason,
} from "@mui/base/SnackbarUnstyled";
// import { setErrorMessage } from "../../store/slices/userSlice";

function SnackbarTemplate() {
  // const error = useAppSelector((store) => store.userSlice.anyErrorMessage);
  // const dispatch = useAppDispatch();

  const handleClose = (_: any, reason: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    // dispatch(setErrorMessage(''));
  };
  return (
    <div/>
      // <SnackbarUnstyled
      //   autoHideDuration={1000}
      //   open={error ? error?.length > 0 : false}
      //   onClose={handleClose}
      //   slotProps={{
      //     root: {
      //       className:
      //         "fixed text-white z-[999] bg-red-300 top-0 px-5 py-1 shadow-md rounded left-1/2 translate-y-[50%] justify-start max-w-[500px] border border-solid border-red-500 animate-[slide_0.4s_ease-out]",
      //     },
      //   }}
      // >
      //   {error}
      // </SnackbarUnstyled>
  );
}

export default SnackbarTemplate;
