import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {axiosService, carService} from "../../services";

function CarForm({addCar, carForUpdate, updateCar}) {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: "all"})
    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])
    const submit = async (newCar) => {
        if (!carForUpdate) {
            const {data} = await carService.create(newCar);
            addCar(data)
        } else {
            const {data} =   await carService.updateById(carForUpdate.id, newCar)
            updateCar(data)
        }

        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'model'} {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яґҐіІїЇёЁ]{1,20}$/)
                })}/>
                <input type={"number"}
                       placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type={"number"}
                       placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    required: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>{carForUpdate ? 'Edite' : 'Save'}</button>
            </form>
            <div>
                {
                    errors.model && <span>Only Alpha min 1 max 20 ch</span>
                }
                {
                    errors.price && <span>Min 0 Max 1 000 000</span>
                }
                {
                    errors.year && <span>Min 1990</span>
                }
            </div>
        </div>
    );
}

export {CarForm};