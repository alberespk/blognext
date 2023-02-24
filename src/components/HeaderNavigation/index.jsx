import { useRouter } from 'next/router';

function HeaderImage({ src, alt }) {
    return (
        <div className="flex-shrink-0">
            <img className="h-8 w-8" src={src} alt={alt || 'image'} />
        </div>
    )
}

function HeaderOptions({ options, selected }) {
    const selectedOptionStyle = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';
    const normalOptionStyle = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {options.map((option, index) => (
                    <a 
                        key={index}
                        href={option.link}
                        className={selected == option.link ? selectedOptionStyle : normalOptionStyle}>
                        {option.name} 
                    </a>
                ))}
            </div>
        </div>  
    )
}

function HeaderNavigation({ options, imageProps }) {
    const router = useRouter();
    const firstUrl = `/${router.asPath.split('/').slice(1)[0]}`;

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        {imageProps &&
                            <HeaderImage src={imageProps.src} alt={imageProps.alt} />
                        }
                        <HeaderOptions selected={firstUrl} options={options}/>
                    </div>
                </div>
            </div>
        </nav>     
    );
}

export default HeaderNavigation;