import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import loginImg from "./logo.svg"

function App() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px]">
      <div className="w-full md:w-6/12 lg:w-2/5 xl:w-2/5 bg-vencruBlue-500 px-[79.5px] pt-[70px] h-screen">
        <h6 className="text-white text-lg tracking-[0.21em]">SME Better</h6>
        <section className="pt-[90px]">
          <h6 className="text-white">Log into your Business Manager</h6>
          <div className="pt-6 flex flex-col">
            <label className="text-xs text-white mb-3">Email Address</label>
            <input
              className="border border-[#E0E0E0] rounded py-2 px-4 focus:outline-none"
              placeholder="someone@email.com"
            />
          </div>
          <div className="pt-6 flex flex-col relative">
            <label className="text-xs text-white mb-3">Enter your password</label>
            <input
              className="border border-[#E0E0E0] rounded py-2 px-4 focus:outline-none"
              placeholder="Password"
            />
            <span className="absolute top-16 right-4 cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
              <path d="M20.2425 10.4457C19.4873 8.85456 18.5885 7.5569 17.5462 6.55272L16.4531 7.64585C17.3445 8.4977 18.1209 9.6121 18.7923 11C17.0048 14.6996 14.4675 16.457 10.9999 16.457C9.95909 16.457 9.00039 16.2967 8.12383 15.9762L6.93939 17.1606C8.15684 17.7228 9.51036 18.0039 10.9999 18.0039C15.1292 18.0039 18.2101 15.8533 20.2425 11.5521C20.3242 11.3792 20.3666 11.1902 20.3666 10.9989C20.3666 10.8076 20.3242 10.6187 20.2425 10.4457ZM18.8768 3.55694L17.9609 2.63999C17.9449 2.62401 17.926 2.61133 17.9051 2.60268C17.8842 2.59403 17.8619 2.58958 17.8393 2.58958C17.8167 2.58958 17.7943 2.59403 17.7735 2.60268C17.7526 2.61133 17.7336 2.62401 17.7177 2.63999L15.3679 4.98866C14.0724 4.32694 12.6164 3.99608 10.9999 3.99608C6.87064 3.99608 3.78978 6.14667 1.75736 10.4478C1.67567 10.6208 1.6333 10.8098 1.6333 11.0011C1.6333 11.1924 1.67567 11.3813 1.75736 11.5543C2.56933 13.2644 3.54687 14.6352 4.68998 15.6666L2.4165 17.9394C2.3843 17.9717 2.3662 18.0154 2.3662 18.0609C2.3662 18.1065 2.3843 18.1502 2.4165 18.1824L3.33367 19.0996C3.3659 19.1318 3.4096 19.1499 3.45517 19.1499C3.50073 19.1499 3.54443 19.1318 3.57666 19.0996L18.8768 3.80015C18.8927 3.78418 18.9054 3.76523 18.9141 3.74436C18.9227 3.7235 18.9272 3.70113 18.9272 3.67854C18.9272 3.65596 18.9227 3.63359 18.9141 3.61273C18.9054 3.59186 18.8927 3.5729 18.8768 3.55694ZM3.20756 11C4.99721 7.30038 7.53451 5.54296 10.9999 5.54296C12.1717 5.54296 13.2371 5.74405 14.2037 6.1529L12.6933 7.66325C11.9781 7.28161 11.159 7.13997 10.3571 7.25923C9.55523 7.37849 8.81288 7.75232 8.23961 8.3256C7.66634 8.89887 7.2925 9.64122 7.17324 10.4431C7.05398 11.245 7.19562 12.064 7.57727 12.7793L5.78504 14.5716C4.7931 13.6961 3.93803 12.5099 3.20756 11ZM8.50775 11C8.50813 10.6211 8.59787 10.2477 8.76967 9.91008C8.94148 9.57243 9.19051 9.28007 9.49653 9.05675C9.80256 8.83342 10.1569 8.68544 10.5309 8.62481C10.9049 8.56418 11.2879 8.59262 11.6488 8.70782L8.62184 11.7348C8.54597 11.4972 8.50748 11.2493 8.50775 11Z" fill="black" fill-opacity="0.5"/>
              <path d="M10.914 13.4062C10.8397 13.4062 10.7664 13.4028 10.6938 13.3961L9.55902 14.531C10.2416 14.7923 10.9852 14.8504 11.7 14.6982C12.4149 14.546 13.0703 14.1899 13.5871 13.6731C14.104 13.1563 14.46 12.5008 14.6122 11.786C14.7645 11.0712 14.7064 10.3275 14.445 9.64497L13.3102 10.7798C13.3169 10.8524 13.3203 10.9257 13.3203 11C13.3205 11.316 13.2583 11.629 13.1375 11.921C13.0166 12.213 12.8394 12.4784 12.6159 12.7018C12.3924 12.9253 12.1271 13.1026 11.8351 13.2234C11.5431 13.3443 11.2301 13.4064 10.914 13.4062Z" fill="black" fill-opacity="0.5"/>
              </g>
            </svg>
            </span>
          </div>
          <button className="bg-transparent border border-white rounded text-center w-full mt-[25px] uppercase py-2 text-sm font-semibold text-white">
            sign in
          </button>
          <div className="flex justify-center align-center text-sm py-6 flex-col md:flex-col lg:flex-row xl:flex-row">
            <span className="text-white font-medium opacity-50">Don’t have an account? </span>
            <span className="text-white font-semibold pl-1.5">Sign Up</span>
          </div>
          <p className="text-white font-semibold text-center text-sm">Forgot password?</p>
          <button className="flex justify-center items-center bg-white py-3 rounded w-full text-[#454749] opacity-95 mt-6">
            <span>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9196 2.77644C8.219 2.77644 9.09553 3.35885 9.59531 3.84552L11.5483 1.86693C10.3488 0.710092 8.78797 3.05176e-05 6.9196 3.05176e-05C4.21318 3.05176e-05 1.87579 1.61163 0.737854 3.95721L2.97528 5.76029C3.53657 4.02902 5.0897 2.77644 6.9196 2.77644Z" fill="#EA4335"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5633 7.33998C13.5633 6.7496 13.5171 6.31877 13.4172 5.87199H6.92017V8.53671H10.7338C10.6569 9.1989 10.2417 10.1962 9.31906 10.8663L11.5027 12.6215C12.8097 11.369 13.5633 9.52601 13.5633 7.33998Z" fill="#4285F4"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.98324 8.60051C2.83715 8.15373 2.75258 7.67504 2.75258 7.18039C2.75258 6.68574 2.83715 6.20705 2.97555 5.76027L0.738123 3.9572C0.269107 4.93054 0 6.02355 0 7.18039C0 8.33723 0.269107 9.43024 0.738123 10.4036L2.98324 8.60051Z" fill="#FBBC05"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.91969 14.3608C8.78806 14.3608 10.3566 13.7226 11.5022 12.6216L9.3186 10.8664C8.73424 11.2892 7.94995 11.5844 6.91969 11.5844C5.08976 11.5844 3.53662 10.3319 2.98303 8.60059L0.745605 10.4037C1.88354 12.7492 4.21324 14.3608 6.91969 14.3608Z" fill="#34A853"/>
              </svg>
            </span>
            <span className="font-normal text-xs ml-3">Log in with Google</span>
          </button>
        </section>
      </div>
      <div className="w-full md:w-6/12 lg:w-3/5 xl:w-3/5 hidden md:flex justify-center flex-col h-screen">
        <p className="text-vencruBlue-500 text-2xl font-medium pb-14 text-center">Organize your customer information</p>
        <Slider {...settings} className="w-full">
          {
            [...Array(5)].map((item, index) => (
              <div key={index}>
                <img src={loginImg} alt="logo-img" className="mx-auto" />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default App;
