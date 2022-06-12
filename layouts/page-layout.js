export default function PageLayout({ children,className }) {
    return (
        <div className={` flex flex-col h-full py-5 mx-5 md:container md:mx-0 ${className}`}>
            {children}

        </div>
    );
}