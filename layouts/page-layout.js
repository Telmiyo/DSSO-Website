export default function PageLayout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-20 w-1/2">
            {children}

        </div>
    );
}