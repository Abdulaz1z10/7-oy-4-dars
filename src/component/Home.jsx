import React from 'react' 
import  Ellipse  from '../assets/Ellipse 1 (1).png';
import rectangle1 from '../assets/Rectangle 30.png'
import rectangle2 from '../assets/Rectangle 32.png'
import rectangle3 from '../assets/Rectangle 34.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <div className="bg-white w-[100%] h-[500px]">
          <div className="flex justify-end gap-[50px] mr-[50px] mt-[50px]">
            <Link
              to="/works"
              className="font-medium text-2xl no-underline text-black"
            >
              Works
            </Link>
            <Link
              to="/blog"
              className="font-medium text-2xl no-underline text-black"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-2xl no-underline text-black"
            >
              Contact
            </Link>
            <Link
              to="/auth"
              className="font-medium text-2xl no-underline text-black"
            >
              Login
            </Link>
          </div>
          <div className="flex ml-[50px]">
            <div className="mt-[220px] ml-[140px]">
              <h1 className="w-[500px] h-[105px] font-bold text-[48px]">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="w-[490px] h-[60px] mt-[40px] text-[16px] font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="bg-red-600 w-[200px] h-[50px] mt-[40px] rounded-md text-white font-medium text-xl">
                Download Resume
              </button>
            </div>
            <img
              className="w-[240px] h-[240px] ml-[360px] mt-[200px]"
              src={Ellipse}
              alt="ellipse"
            />
          </div>
        </div>
      </header>
      <section>
        <div className="flex justify-center mt-[200px]">
          <div className="bg-slate-300 w-[100%] h-[450px]">
            <div className="flex gap-[890px] justify-center mt-[20px]">
              <h1>Recent posts</h1>
              <h3 className="text-cyan-600">View all</h3>
            </div>
            <div className="flex justify-center mt-[20px] gap-[40px]">
              <div className="bg-slate-50 w-[550px] h-[300px] ">
                <p className="text-3xl font-bold mt-[20px] w-[350px] ml-[20px]">
                  Making a design system from scratch
                </p>
                <div className="flex gap-[40px] text-xl ml-[20px]">
                  <p>12 Feb 2020</p>
                  <p>|</p>
                  <p>Design pattern</p>
                </div>
                <div className="w-[350px] text-2xl ml-[20px]">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 w-[550px] h-[300px] ">
                <p className="text-3xl font-bold mt-[20px] w-[350px] ml-[20px]">
                  Making a design system from scratch
                </p>
                <div className="flex gap-[40px] text-xl ml-[20px]">
                  <p>12 Feb 2020</p>
                  <p>|</p>
                  <p>Design pattern</p>
                </div>
                <div className="w-[350px] text-2xl ml-[20px]">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[50px]">
          <div className="w-[900px] h-[100px] mt-[50px] ml-[140px]">
            <h1>Featured works</h1>
          </div>
          <div>
            <div className="w-[900px] h-[230px]">
              <div className="flex w-[860px] h-[180px]">
                <img className="ml-[140px]" src={rectangle1} alt="rectangle1" />
                <div>
                  <Link className="w-[300px] h-[34px] ml-[18px] font-bold text-3xl no-underline text-black">
                    Designing Dashboards
                  </Link>
                  <div className="flex ml-[18px] mt-[20px] gap-[26px]">
                    <div className="w-[50px] h-[20px] rounded-2xl  bg-slate-950 ">
                      <p className="text-white ml-[10px]">2020</p>
                    </div>
                    <p className="font-medium text-2xl text-zinc-500">
                      Dashboard
                    </p>
                  </div>
                  <p className="font-bold text-3xl w-[800px] ml-[18px] h-[93px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-[50px] ml-[140px] w-[1100px] h-[2px] border-solid border-2 border-slate-600 "></div>
            <div className="w-[900px] h-[230px]">
              <div className="flex w-[860px] h-[180px]">
                <img className="ml-[140px]" src={rectangle2} alt="rectangle2" />
                <div>
                  <Link className="w-[300px] h-[34px] ml-[18px] font-bold text-3xl no-underline text-black">
                    Vibrant Portraits of 2020
                  </Link>
                  <div className="flex ml-[18px] mt-[20px] gap-[26px]">
                    <div className="w-[50px] h-[20px] rounded-2xl  bg-slate-950 ">
                      <p className="text-white ml-[10px]">2018</p>
                    </div>
                    <p className="font-medium text-2xl text-zinc-500">
                      Illustration
                    </p>
                  </div>
                  <p className="font-bold text-3xl w-[800px] ml-[18px] h-[93px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-[50px] ml-[140px] w-[1100px] h-[2px] border-solid border-2 border-slate-600 "></div>
            <div className="w-[900px] h-[230px]">
              <div className="flex w-[860px] h-[180px]">
                <img className="ml-[140px]" src={rectangle3} alt="rectangle3" />
                <div>
                  <Link className="w-[300px] h-[34px] ml-[18px] font-bold text-3xl no-underline text-black">
                    36 Days of Malayalam type
                  </Link>
                  <div className="flex ml-[18px] mt-[20px] gap-[26px]">
                    <div className="w-[50px] h-[20px] rounded-2xl  bg-slate-950 ">
                      <p className="text-white ml-[10px]">2018</p>
                    </div>
                    <p className="font-medium text-2xl text-zinc-500">
                      Typography
                    </p>
                  </div>
                  <p className="font-bold text-3xl w-[800px] ml-[18px] h-[93px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-[50px] ml-[140px] w-[1100px] h-[2px] border-solid border-2 border-slate-600 "></div>
          </div>
        </div>
      </section>
      <footer>
        <div className="w-[1100px] h-[200px]">
          <div className="flex gap-[20px] pl-[650px] pt-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
                fill="#21243D"
              />
              <path
                d="M15 7.27014C10.7375 7.27014 7.26978 10.7379 7.26978 15.0004C7.26978 19.2627 10.7375 22.7303 15 22.7303C19.2625 22.7303 22.7303 19.2627 22.7303 15.0004C22.7303 10.7379 19.2625 7.27014 15 7.27014ZM15 20.0683C12.2054 20.0683 9.93152 17.7949 9.93152 15.0002C9.93152 12.2054 12.2052 9.93171 15 9.93171C17.7948 9.93171 20.0685 12.2054 20.0685 15.0002C20.0685 17.7949 17.7947 20.0683 15 20.0683Z"
                fill="#21243D"
              />
              <path
                d="M23.0545 5.01318C22.5417 5.01318 22.0379 5.2208 21.6757 5.58457C21.3118 5.94657 21.1025 6.45053 21.1025 6.96513C21.1025 7.47814 21.3119 7.98192 21.6757 8.34569C22.0377 8.70769 22.5417 8.91708 23.0545 8.91708C23.5691 8.91708 24.0713 8.70769 24.435 8.34569C24.7988 7.98192 25.0064 7.47796 25.0064 6.96513C25.0064 6.45053 24.7988 5.94657 24.435 5.58457C24.073 5.2208 23.5691 5.01318 23.0545 5.01318Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="30"
              viewBox="0 0 37 30"
              fill="none"
            >
              <path
                d="M36.9231 3.55154C35.55 4.15385 34.0869 4.55308 32.5615 4.74692C34.1308 3.81 35.3285 2.33769 35.8915 0.563077C34.4285 1.43538 32.8131 2.05154 31.0915 2.39538C29.7023 0.916154 27.7223 0 25.5623 0C21.3715 0 17.9977 3.40154 17.9977 7.57154C17.9977 8.17154 18.0485 8.74846 18.1731 9.29769C11.88 8.99077 6.31154 5.97462 2.57077 1.38C1.91769 2.51308 1.53462 3.81 1.53462 5.20615C1.53462 7.82769 2.88462 10.1515 4.89692 11.4969C3.68077 11.4738 2.48769 11.1208 1.47692 10.5646C1.47692 10.5877 1.47692 10.6177 1.47692 10.6477C1.47692 14.3262 4.10077 17.3815 7.54154 18.0854C6.92538 18.2538 6.25385 18.3346 5.55692 18.3346C5.07231 18.3346 4.58308 18.3069 4.12385 18.2054C5.10462 21.2031 7.88769 23.4069 11.1969 23.4785C8.62154 25.4931 5.35154 26.7069 1.81154 26.7069C1.19077 26.7069 0.595385 26.6792 0 26.6031C3.35308 28.7654 7.32692 30 11.6123 30C25.5415 30 33.1569 18.4615 33.1569 8.46C33.1569 8.12538 33.1454 7.80231 33.1292 7.48154C34.6315 6.41538 35.8938 5.08385 36.9231 3.55154Z"
                fill="#21243D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891H7.08984V11.4844H10.6055V23.7891ZM10.6055 9.72656H7.08984V6.21094H10.6055V9.72656ZM22.9102 23.7891H19.3945V16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578V23.7891H12.3633V11.4844H15.8789V12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536V23.7891Z"
                fill="#21243D"
              />
            </svg>
          </div>
          <div className="flex pl-[620px] mt-[30px]">
            <p className="font-medium text-xl">
              Copyright ©2020 All rights reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
/* Ellipse 1 */



