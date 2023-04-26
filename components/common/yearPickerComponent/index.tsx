import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { he } from "date-fns/locale";

interface IYearPicker {
    error?: boolean
    text: string;
    label: string;
    value: Date | null;
    minYear?: any;
    disabled?: boolean
    setValue?: Dispatch<SetStateAction<any>>;
}

const YearPicker: FC<IYearPicker> = ({value, setValue, error, label, text, minYear, disabled}) => {
    let currentYear = String(new Date().getFullYear())
    const [open, setOpen] = useState<boolean>(false)
    const onKeyDown = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className='flex'>
            <LocalizationProvider adapterLocale={he} dateAdapter={AdapterDateFns}>
                <div className='flex flex-col w-[134px] lg:mr-[20px] lg:w-[200px]'>
                    <p>{text}</p>
                    <DatePicker
                        views={['year']}
                        label={label}
                        value={value}
                        disabled={disabled}
                        minDate={minYear}
                        maxDate={currentYear}
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        onChange={(newValue) => {
                            setValue?.(newValue);
                        }}
                        renderInput={(params) => (
                            <Box sx={{display: 'flex', alignItems: 'center', position: "relative"}}>
                                <input
                                    onClick={(e) => setOpen(true)}
                                    onKeyDown={onKeyDown}
                                    className={`${error ? "border-red-800" : ''} py-[9px] px-[12px] h-[40px] border-solid border-[1px] border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px] w-full lg:h-[56px]`}
                                    ref={params.inputRef}
                                    {...params.inputProps}
                                    placeholder={label}
                                />
                                <div className="absolute left-[0px]">
                                    {params.InputProps?.endAdornment}
                                </div>
                            </Box>
                        )}
                    />
                </div>
            </LocalizationProvider>
        </div>
    );
};

export default YearPicker;