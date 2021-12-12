import styled, {css} from "styled-components"

const LoaderBg = styled.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--clr-bg);
    font-size: 2rem;
    text-align: center;
    opacity: 1;
    transition: opacity 1s;
    ${({isLoading}) => !isLoading && css`
        opacity: 0;
    `}
`

const Marquee = styled.marquee`
    width: 5ch;
    font-size: 1.5rem;
`

const countries = "🇦🇫 🇬🇮 🇸🇽 🇬🇬 🇮🇪 🇹🇼 🇱🇺 🇾🇪 🇱🇦 🇺🇸 🇦🇺 🇵🇰 🇬🇸 🇲🇿 🇹🇰 🇹🇳 🇧🇩 🇫🇷 🇻🇬 🇬🇭 🇭🇰 🇱🇨 🇲🇦 🇲🇴 🇵🇱 🇸🇹 🇻🇪 🇲🇼 🇧🇧 🇲🇭 🇨🇩 🇵🇬 🇹🇲 🇨🇴 🇳🇬 🇷🇼 🇺🇬 🇪🇷 🇩🇿 🇷🇸 🇬🇦 🇦🇮 🇪🇹 🇲🇶 🇨🇨 🇲🇪 🇨🇿 🇹🇹 🇬🇹 🇸🇭 🇲🇱 🇨🇼 🇨🇽 🇱🇧 🇲🇳 🇰🇵 🇦🇱 🇩🇲 🇹🇫 🇮🇹 🇹🇬 🇩🇯 🇶🇦 🇷🇺 🇪🇬 🇲🇾 🇾🇹 🇹🇿 🇰🇬 🇧🇳 🇦🇷 🇨🇰 🇲🇫 🇦🇩 🇬🇵 🇲🇽 🇳🇺 🇵🇲 🇴🇲 🇸🇰 🇨🇷 🇺🇲 🇧🇴 🇹🇨 🇵🇹 🇳🇪 🇸🇲 🇰🇭 🇵🇦 🇧🇷 🇿🇲 🇱🇾  🇨🇫 🇲🇬 🇮🇶 🇰🇮 🇲🇺 🇹🇷 🇭🇺 🇹🇻 🇷🇴 🇸🇦 🇫🇲 🇺🇦 🇭🇷 🇸🇩 🇧🇹 🇰🇾 🇨🇺 🇨🇱 🇨🇾 🇲🇷 🇸🇿 🇰🇿 🇱🇰 🇦🇽 🇱🇻 🇮🇳 🇬🇺 🇨🇭 🇫🇮 🇧🇬 🇧🇻 🇱🇷 🇧🇸 🇻🇨 🇳🇴 🇰🇲 🇦🇼 🇼🇸 🇵🇭 🇿🇦 🇰🇳 🇹🇭 🇨🇲 🇹🇱 🇧🇯 🇧🇪 🇪🇸 🇱🇮 🇸🇸 🇸🇾 🇦🇪 🇦🇲 🇦🇬 🇹🇯 🇧🇦 🇧🇼 🇪🇪 🇨🇬 🇦🇴 🇫🇯 🇸🇪 🇿🇼 🇸🇧 🇬🇷 🇮🇩 🇬🇳 🇬🇶 🇵🇷 🇹🇴 🇸🇻 🇺🇾 🇬🇧 🇮🇴 🇵🇼 🇵🇫 🇧🇾 🇦🇸 🇬🇫 🇧🇱 🇳🇨 🇲🇰 🇲🇵 🇯🇵 🇳🇵 🇸🇴 🇦🇹 🇪🇭 🇧🇭 🇧🇿 🇮🇷 🇲🇲 🇫🇰 🇸🇷 🇭🇹 🇳🇫 🇨🇮 🇮🇲 🇧🇮 🇸🇯 🇹🇩 🇮🇱 🇪🇨 🇳🇮 🇳🇿 🇻🇦 🇬🇩 🇻🇺 🇧🇫 🇨🇳 🇯🇲 🇸🇮 🇬🇾 🇲🇩 🇯🇴 🇸🇨 🇯🇪 🇲🇹 🇸🇳 🇻🇳 🇲🇸 🇰🇼 🇵🇾 🇵🇳 🇵🇪 🇳🇷 🇵🇸 🇩🇰 🇬🇼 🇰🇷 🇧🇲 🇲🇻 🇦🇶 🇺🇿 🇳🇱 🇼🇫 🇲🇨 🇻🇮 🇱🇹 🇷🇪 🇸🇱 🇳🇦 🇰🇪 🇸🇬 🇭🇲 🇭🇳 🇫🇴 🇮🇸 🇬🇲 🇦🇿 🇬🇱 🇱🇸 🇬🇪 🇽🇰 🇩🇪 🇨🇻 🇨🇦 🇩🇴"

const Loader = ({isLoading}) => {
    return (
        <LoaderBg isLoading={isLoading}>
            <div>
                <Marquee>{countries}</Marquee>
                <p>Loading ...</p>
            </div>
        </LoaderBg>
    )
}

export default Loader
