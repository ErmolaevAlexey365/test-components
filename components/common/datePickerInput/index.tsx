import * as React from 'react';
import Box from '@mui/material/Box';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { he } from "date-fns/locale";

interface IDatePickerProps {
    field: { onChange: (value: Date | null) => void, onBlur: () => void, value: Date, name: "birthDate" },
}

const DatePickerInput: React.FC<IDatePickerProps> = ({field}) => {
    const [value, setValue] = React.useState<Date | null>(new Date(""));

    return (
        <LocalizationProvider adapterLocale={he} dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                {...field}
                PaperProps={{
                    sx: {
                        "& .MuiPickersDay-root": {
                            "&.Mui-selected": {
                                backgroundColor: "#143E29!important",
                            },
                        },
                        ".css-3eghsz-PrivatePickersYear-button.Mui-selected": {
                            backgroundColor: "#143E29!important",
                        },
                        ".css-15fehp8-MuiTypography-root-PrivatePickersMonth-root.Mui-selected": {
                            "&.Mui-selected": {
                                backgroundColor: "#143E29!important",
                            },
                        }
                    }
                }}
                openTo="year"
                views={['year', 'month', 'day']}
                label="בחר תאריך"
                maxDate={new Date()}
                inputFormat='dd/MM/yyyy'
                value={value}
                onChange={(value: Date | null) => {
                    setValue(value);
                    field.onChange(value)
                }}
                renderInput={(params) => (
                    <Box sx={{display: 'flex', alignItems: 'center', position: "relative"}}>
                        <input
                            className="py-[9px] px-[12px] h-[40px] border-solid border border-[#DADADA] outline-0 focus:border-[#282421] rounded-[8px] w-full"
                            ref={params.inputRef}
                            {...params.inputProps}
                        />
                        <div className="absolute left-[0px]">
                            {params.InputProps?.endAdornment}
                        </div>
                    </Box>
                )}
            />
        </LocalizationProvider>
    );
};

export default DatePickerInput;


