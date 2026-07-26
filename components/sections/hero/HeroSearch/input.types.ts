export interface InputPlaceholderProps {
  value: string;
}

export interface InputFieldProps {
  value: string;
  SetUrlValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
