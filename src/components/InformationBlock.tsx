export default function InformationBlock({
    children,
    id
}: {
    children?: React.ReactNode;
    id?: string;
}) {
    return (
        <div id={id} className='information-block'>
            {children}
        </div>
    );
}
