import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import css from "./style.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Calendar from "../Calendar/Calendar";
import "react-toastify/dist/ReactToastify.css";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Booking data:", data);
    toast.success("Camper successfully booked!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputContainer}>
        <Input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className={css.inputStyle}
        />
        {errors.name && <span className={css.errorStyle}>{errors.name.message}</span>}

        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className={css.inputStyle}
        />
        {errors.email && <span className={css.errorStyle}>{errors.email.message}</span>}
        <Controller
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
          render={({ field }) => (
            <Calendar value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.date && <span className={css.errorStyle}>{errors.date.message}</span>}

        <textarea
          placeholder="Comment"
          {...register("comment")}
          rows={4}
          className={css.inputStyle}
          style={{ resize: "none" }}
        ></textarea>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
      <Button type="submit" className={css.button}>
        Send
      </Button>
    </form>
  );
};

export default BookForm;
