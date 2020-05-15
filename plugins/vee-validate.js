import { extend } from "vee-validate";
import { required, alpha, min, numeric, regex } from "vee-validate/dist/rules";

extend("regex",{
    ...regex,
    message: "Формат телефона 89ХХХХХХХХХ"
});

extend("required", {
    ...required,
    message: "Обязательное поле"
});

extend("alpha", {
    ...alpha,
    message: "Это поле может содержать только буквы"
});

extend("min", {
    ...min,
    message: "Минимальное количество символов 2"
});

