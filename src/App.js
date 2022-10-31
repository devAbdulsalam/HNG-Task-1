import Button from "./Button";
import MyImage from "./assets/devAbdulsalam.jpg";
import I4G from "./assets/I4G.png"
import zuriLogo from './assets/zuri.png';
import sharebtn from "./assets/sharebutton.png"
import circle from "./assets/circle.png"
import slack from "./assets/slack.png"
import git from "./assets/git.png"



function App() {
  return (
    <div className="pt-10 relative">
          <img src={circle} alt="sharebtn" className="absolute right-12 top-6 cursor-pointer block md:hidden" ></img>
      <div className="w-10/12 md:w-7/12 mx-auto mb-3 text-center relative pb-5">
          <img src={sharebtn} alt="sharebtn" className="absolute right-12 top-2 cursor-pointer hidden md:block" ></img>
        <div className="m-2">
          <img src={MyImage} alt="Imag of Myself" id="profile__img" className="w-[100px] h-[100px] shadow-sm aspect-square mx-auto object-fit object-center inline-block rounded-full" />
          <h2 className="text-xl m-3 font-semibold p-2">Abdulsalam Mohammed</h2>
        </div>

       <div id="socialsBtns" className="mt-10">
          <Button link={"https://twitter.com/MMAbdulsalam001"} name="Twitter"id="twitter" />
          <div className="hidden">
            <Button link={"https://slack.com/"} name="Slack" id="slack" />
          </div>
       
        <Button link={"https://training.zuri.team"} name="Zuri Team" id={"btn__zuri"} className="w-full"/>

        <Button link={"https://books.zuri.team"} name="Books" id={"books"} />


        <div className="w-full relative">
          <sub className="-mt-12 left-0 bottom-[-15px] absolute w-full m-2 hidden">A comprehesive guide to python programming language</sub>
          <Button  link={"https://books.zuri.team/python-for-beginners?ref_id="} name="Book Python" id={"book__python"}/>
        </div>
        
        <Button link={"https://background.zuri.team"} name="Pitch" id={"pitch"} />

        <Button link={"https://background.zuri.team"} name="Background Check for coders" id={"bgcheck"} />

        <Button link={"https://books.zuri.team/design-rules "} name="Book Design" id={"book__design"} />
      </div>
    </div>
    <div className="m-4 p-4 flex justify-center gap-4">
      <a href=""><img src={slack} alt="slack"></img></a>
      
      <a href=""><img src={git} alt="slack"></img></a>
    </div>
    <footer className=" w-11/12 mx-auto mt-6">
     <hr className="px mt-3 w-11-12 mx-auto" />
      <div className="flex flex-col md:flex-row gap-4 text-left md:text-center md:justify-evenly md:items-center p-6">
        <div id="zuri__logo">
          <img src={zuriLogo} alt="Zuri Logo" />
        </div>
        <h5 className="text-xl my-4">HNG Internship 9 Frontend Task</h5>
        <div id="I4G__logo">
          <img src={I4G} alt="I4G Logo" />
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
