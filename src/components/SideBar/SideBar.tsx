import { Button } from '../Button/Button';
import {
  FacebookIcon,
  LinkedIcon,
  Github,
  Birthday,
  Location,
  Phone,
} from '../Icons';
import { Email } from '../Icons/Email';

export const SideBar = () => {
  return (
    <aside className="p-8 flex justify-start flex-col bg-[#F5F8F9] rounded-[30px] relative z-10 w-[17.5rem] text-center">
      <div className="w-full">
        <img
          src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/124168998_1071974226567016_4898908829383319791_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eiGouIkyWHoAX-Hbk0X&_nc_ht=scontent.fdad3-4.fna&oh=00_AfAuVXkRc6laqWgPilujQC7MxDTBMFVSaX0Baap5cRyPXA&oe=6515839F"
          alt="image"
          className="rounded-2xl mb-[1.375rem]"
        />
        <div>
          <p className="text-[#44566C] font-semibold text-2xl mr-">
            Trung <span className="font-extralight">Phan</span>
          </p>
          <div className="badge">
            <span className="inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <span className="ml-1">Frontend Developer</span>
            </span>
          </div>
        </div>
        <div className="social flex justify-evenly pt-4">
          <button
            className="mr-4"
            onClick={() => window.open('https://facebook.com/s1mpleeeee')}
          >
            <FacebookIcon />
          </button>
          <button
            className="mr-4"
            onClick={() =>
              window.open('https://www.linkedin.com/in/trung-phan-1b236a1ab/')
            }
          >
            <LinkedIcon />
          </button>
          <button
            className="mr-4"
            onClick={() => window.open('https://github.com/phuoctrung-ppt')}
          >
            <Github />
          </button>
        </div>
        <div className="info flex flex-col font-light text-base justify-center items-start pt-6">
          <div className="flex items-center mb-3">
            <Birthday />
            <p className="ml-3">Aug 08 1996</p>
          </div>
          <div className="flex items-center mb-3">
            <Location />
            <p className="ml-3">Da Nang, Viet Nam</p>
          </div>
          <div className="flex items-center mb-3">
            <Email />
            <p className=" ml-3">phuoctrung.ppt@gmail.com</p>
          </div>
          <div className="flex items-center mb-3">
            <Phone />
            <p className=" ml-3">+(84) 352-804-743</p>
          </div>
        </div>
        <Button />
      </div>
    </aside>
  );
};
