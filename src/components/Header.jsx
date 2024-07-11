import mobile from "../assets/mobile.svg"

const Header = () => {
  return (
    <header className="bg-[#060708]  sticky top-0 z-50 bg-background-darken2 text-gray-100">
      <div className="z-[11] flex justify-between items-center gap-4 h-[56px] sm:h-[80px] px-5 md:px-9">
        <div className="flex gap-3 items-center grow shrink">
          <a href="#">
            <div className="hidden sm:flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M21.023 2.167c.566-.26.817-.933.559-1.501a1.14 1.14 0 0 0-1.504-.564l-.016.007-16.997 12.11zm44.614 14.986V.021h1.836v17.132zm-28.718-.905q1.785 1.1 4.258 1.1 1.47 0 2.595-.44 1.15-.44 1.958-1.126a7.4 7.4 0 0 0 1.321-1.492v2.863h1.69V8.538h-7.613v1.664h5.923q0 1.69-.832 2.888a5.3 5.3 0 0 1-2.13 1.836 6.2 6.2 0 0 1-2.765.636q-1.958 0-3.377-.856a5.8 5.8 0 0 1-2.13-2.35q-.735-1.493-.734-3.304 0-1.836.734-3.304a5.75 5.75 0 0 1 2.179-2.325q1.42-.881 3.377-.881 1.86 0 3.157.758a5.4 5.4 0 0 1 2.056 2.056h2.007q-.905-2.032-2.839-3.304Q43.844.755 41.226.755q-2.422 0-4.234 1.126a7.5 7.5 0 0 0-2.766 2.986q-.978 1.884-.979 4.185 0 2.301.955 4.185a7.56 7.56 0 0 0 2.717 3.01m16.438.269q1.347.832 3.133.832 1.518 0 2.594-.587a5 5 0 0 0 1.787-1.567v1.958h1.836V4.916h-1.836v1.982a4.95 4.95 0 0 0-1.787-1.59q-1.076-.588-2.594-.588-1.785 0-3.133.856a5.67 5.67 0 0 0-2.055 2.277q-.735 1.42-.735 3.181 0 1.739.735 3.182a5.84 5.84 0 0 0 2.055 2.3m5.679-1.469q-.93.637-2.3.637-1.347 0-2.326-.637a4.15 4.15 0 0 1-1.493-1.688 5.3 5.3 0 0 1-.514-2.326q0-1.272.514-2.325A4.15 4.15 0 0 1 54.41 7.02q.979-.636 2.325-.636 1.37 0 2.3.636a4.03 4.03 0 0 1 1.445 1.69q.49 1.051.49 2.324 0 1.249-.49 2.326a4.03 4.03 0 0 1-1.444 1.688m14.607-4.21-4.724 6.315h2.325l3.475-4.993 3.451 4.993h2.35l-4.748-6.314 4.43-5.923h-2.35L74.72 9.54l-3.157-4.625h-2.35zm13.239 6.51q-1.86 0-3.255-.831a6 6 0 0 1-2.179-2.3q-.758-1.445-.758-3.183 0-1.761.734-3.181a5.55 5.55 0 0 1 2.105-2.277q1.37-.856 3.23-.856 1.886 0 3.231.856a5.56 5.56 0 0 1 2.105 2.277q.734 1.42.734 3.181v.735H82.574q.147 1.077.686 1.982.563.881 1.492 1.42.93.514 2.154.514 1.297 0 2.179-.563a4.14 4.14 0 0 0 1.37-1.493h2.007a6.05 6.05 0 0 1-2.031 2.692q-1.37 1.028-3.55 1.028m-4.283-7.293h8.322q-.246-1.566-1.322-2.618-1.077-1.053-2.84-1.053-1.761 0-2.838 1.053-1.053 1.052-1.322 2.618M27.877 1.46c.395.132.715.41.9.781s.216.794.084 1.189a1.55 1.55 0 0 1-.78.9L.48 18 26.68 1.549l.009-.005a1.55 1.55 0 0 1 1.189-.084m-5.456 9.515a.93.93 0 0 1-.413 1.247L10.23 16.954l10.928-6.39.013-.006a.93.93 0 0 1 1.25.417"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="flex sm:hidden items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M21.023 2.167c.566-.26.817-.933.559-1.501a1.14 1.14 0 0 0-1.504-.564l-.016.007-16.997 12.11zm44.614 14.986V.021h1.836v17.132zm-28.718-.905q1.785 1.1 4.258 1.1 1.47 0 2.595-.44 1.15-.44 1.958-1.126a7.4 7.4 0 0 0 1.321-1.492v2.863h1.69V8.538h-7.613v1.664h5.923q0 1.69-.832 2.888a5.3 5.3 0 0 1-2.13 1.836 6.2 6.2 0 0 1-2.765.636q-1.958 0-3.377-.856a5.8 5.8 0 0 1-2.13-2.35q-.735-1.493-.734-3.304 0-1.836.734-3.304a5.75 5.75 0 0 1 2.179-2.325q1.42-.881 3.377-.881 1.86 0 3.157.758a5.4 5.4 0 0 1 2.056 2.056h2.007q-.905-2.032-2.839-3.304Q43.844.755 41.226.755q-2.422 0-4.234 1.126a7.5 7.5 0 0 0-2.766 2.986q-.978 1.884-.979 4.185 0 2.301.955 4.185a7.56 7.56 0 0 0 2.717 3.01m16.438.269q1.347.832 3.133.832 1.518 0 2.594-.587a5 5 0 0 0 1.787-1.567v1.958h1.836V4.916h-1.836v1.982a4.95 4.95 0 0 0-1.787-1.59q-1.076-.588-2.594-.588-1.785 0-3.133.856a5.67 5.67 0 0 0-2.055 2.277q-.735 1.42-.735 3.181 0 1.739.735 3.182a5.84 5.84 0 0 0 2.055 2.3m5.679-1.469q-.93.637-2.3.637-1.347 0-2.326-.637a4.15 4.15 0 0 1-1.493-1.688 5.3 5.3 0 0 1-.514-2.326q0-1.272.514-2.325A4.15 4.15 0 0 1 54.41 7.02q.979-.636 2.325-.636 1.37 0 2.3.636a4.03 4.03 0 0 1 1.445 1.69q.49 1.051.49 2.324 0 1.249-.49 2.326a4.03 4.03 0 0 1-1.444 1.688m14.607-4.21-4.724 6.315h2.325l3.475-4.993 3.451 4.993h2.35l-4.748-6.314 4.43-5.923h-2.35L74.72 9.54l-3.157-4.625h-2.35zm13.239 6.51q-1.86 0-3.255-.831a6 6 0 0 1-2.179-2.3q-.758-1.445-.758-3.183 0-1.761.734-3.181a5.55 5.55 0 0 1 2.105-2.277q1.37-.856 3.23-.856 1.886 0 3.231.856a5.56 5.56 0 0 1 2.105 2.277q.734 1.42.734 3.181v.735H82.574q.147 1.077.686 1.982.563.881 1.492 1.42.93.514 2.154.514 1.297 0 2.179-.563a4.14 4.14 0 0 0 1.37-1.493h2.007a6.05 6.05 0 0 1-2.031 2.692q-1.37 1.028-3.55 1.028m-4.283-7.293h8.322q-.246-1.566-1.322-2.618-1.077-1.053-2.84-1.053-1.761 0-2.838 1.053-1.053 1.052-1.322 2.618M27.877 1.46c.395.132.715.41.9.781s.216.794.084 1.189a1.55 1.55 0 0 1-.78.9L.48 18 26.68 1.549l.009-.005a1.55 1.55 0 0 1 1.189-.084m-5.456 9.515a.93.93 0 0 1-.413 1.247L10.23 16.954l10.928-6.39.013-.006a.93.93 0 0 1 1.25.417"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <button
              className="connectButton inline-flex text-foreground items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-transparent border border-border-button hover:border-primary-lighten1 hover:text-primary-lighten1 active:border-primary active:text-primary disabled:border-component-btnDisable disabled:text-info-disable h-[36px] rounded-[6px] px-4 py-2 text-xs leading-[18px] connectButton"
              type="button"
            >
              Network
            </button>
          </div>
          <div className="pointer-events-auto  items-center border rounded-full hidden sm:block">
            <button
              type="button"
              id="radix-:r6:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="focus:outline-none connectButton"
            >
              <span
                className="[&amp;_svg]:text-inherit [&amp;_svg_path]:fill-current [&amp;_svg]:h-[1em] h-[1em] [&amp;_svg]:w-[1em] w-[1em] text-foreground items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-component-btnGrey hover:bg-component-btnGreyHover active:bg-component-btnGrey disabled:bg-component-btnDisable disabled:text-info-disable h-[36px] rounded-full aspect-square p-0 hidden sm:inline-flex text-size-20 w-fit text-size-20"
                type="button"
              >
                <img src={mobile} alt="" />
              </span>
            </button>
          </div>
          <div className="hidden sm:flex">
            <div className="">
              <button
                className="connectButton bg-[#492bff] inline-flex text-foreground items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary hover:bg-primary-lighten1 active:bg-primary disabled:bg-component-btnDisable disabled:text-info-disable h-[36px] rounded-[6px] py-2 text-xs leading-[18px] px-[24px] connectButton"
                type="button"
              >
                Log in
              </button>
            </div>
            <div className="hidden sm:block w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] rounded-full overflow-hidden"></div>
          </div>
          <div className="text-info sm:hidden">
            <span className="[&amp;_svg]:text-inherit [&amp;_svg_path]:fill-current [&amp;_svg]:h-[1em] h-[1em] [&amp;_svg]:w-[1em] w-[1em] text-size-20">
              <button
                className="connectButton bg-[#492bff] inline-flex text-foreground items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary hover:bg-primary-lighten1 active:bg-primary disabled:bg-component-btnDisable disabled:text-info-disable h-[44px] rounded-[8px] px-6 py-[11px] text-sm leading-[20px] connectButton"
                type="button"
              >
                Log in
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
