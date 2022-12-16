import { Button } from "@mui/material"

interface ToolbarItemProps {
    label: string,
    listener: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ToolbarItem({ label, listener }: ToolbarItemProps) {
    return <Button onClick={listener}>{label}</Button>
}