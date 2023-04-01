import { Typewriter } from "react-simple-typewriter";
import GitHubCalendar from "react-github-calendar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Tirthoraj_Badhei_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Tirthoraj_Badhei_Resume.pdf";
        alink.click();
      });
    });
  };
  const handleAlert = () => {
    alert("Message Sent!");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tirthoraj
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="#scrollspyHeading1"
              >
                HOME
              </a>
              <a className="nav-link" href="#scrollspyHeading0">
                ABOUT
              </a>
              <a className="nav-link" href="#scrollspyHeading3">
                PROJECTS
              </a>
              <a className="nav-link" href="#scrollspyHeading2">
                SKILLS
              </a>
              <a
                href="https://drive.google.com/file/d/1DrXBGYLuvRhDFTgDk4WDsnxiLbnLjsja/view?usp=share_link"
                target="_blank"
                style={{ cursor: "pointer" }}
                className="nav-link"
                onClick={onButtonClick}
              >
                RESUME
              </a>
              <a className="nav-link" href="#scrollspyHeading4">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />

      <div className="container-fluid text-center" id="scrollspyHeading1">
        <div className="row">
          <div className="col-sm">
            <h4>
              <Typewriter
                words={["WELCOME TO MY WORLD", "Thank you for visiting"]}
                loop={0}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h4>
            <br />
            <h1 className="head">Hi, I'm Tirthoraj Badhei</h1>
            <br />
            <h5 className="about">
              <Typewriter
                words={[
                  "A Skilled full stack developer and quick learner who can quickly adapt to new environments. Looking for a challenging role in the industry to utilize skills and learn",
                ]}
                loop={1}
                cursor
                typeSpeed={5}
                deleteSpeed={5}
                delaySpeed={1000}
              />
            </h5>
            <br />
            <div onClick={onButtonClick}>
              <i
                style={{ fontSize: "200%", cursor: "pointer" }}
                className="fa-solid fa-download"
              >
                {" "}
                Resume
              </i>
            </div>
          </div>
          <div className="col-sm" data-aos="fade-left">
            <img className="img1" src="tirthoraj.png" alt="tirthoraj" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container text-center" data-aos="slide-right">
        <h1
          style={{ fontSize: "60px", fontWeight: "700", textAlign: "center" }}
          id="scrollspyHeading0"
        >
          <Typewriter
            words={["About Me"]}
            loop={0}
            cursor
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </h1>
        <div className="row">
          <div className="col">
            <h3 style={{ width: "70%", margin: "auto", textAlign: "center" }}>
              An aspiring full-stack web developer specializing in MERN stack.
              Has 1000 hours of coding experience and is proficient in ReactJS,
              Javascript and MongoDB. keen to learn new technologies, like
              WEB-3.0, Blockchain, and Defi, and looking forward to working in a
              company and contributing to it's growth.
            </h3>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{ fontSize: "60px", fontWeight: "700", textAlign: "center" }}
        id="scrollspyHeading3"
      >
        <Typewriter
          words={["My Projects"]}
          loop={0}
          cursor
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </h1>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex="0"
      ></div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm project" data-aos="fade-up">
            <div>
              <img style={{ width: "100%" }} src="1.jpg" alt="" />
              <h3>Lenskart Clone</h3>
              <p>
                Lenskart Clone. is an Indian e-commerce company that sells
                eyeglasses, contact lenses, and sunglasses.
              </p>
              <h4>Tech Stacks</h4>
              <p> ReactJS, NodeJS, ExpressJS, MongoDB, chakraUI</p>
              <div
                style={{
                  display: "flex",
                  gap: "50px",

                  justifyContent: "center",
                }}
              >
                <a href="https://github.com/tirthorajbadhei/Lenskart_Clone">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-github"
                  ></i>
                </a>
                <a href="https://masai-glasscart.netlify.app/">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-solid fa-arrow-right-to-bracket"
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm project" data-aos="fade-up">
            <div>
              <img style={{ width: "100%" }} src="3.jpg" alt="" />
              <h3>OneClick</h3>
              <p>
                OneClick, It is a Full-Stack E-commerce Website, where user can
                register and order any products.
              </p>
              <h4>Tech Stacks</h4>
              <p> ReactJS, NodeJS, ExpressJS, MongoDB, BootStrap</p>
              <div
                style={{
                  display: "flex",
                  gap: "50px",

                  justifyContent: "center",
                }}
              >
                <a href="https://github.com/tirthorajbadhei/E-Com_Full-Stack">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-github"
                  ></i>
                </a>
                <a href="https://e-com-fullstack.netlify.app/">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-solid fa-arrow-right-to-bracket"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col-sm project" data-aos="fade-up">
            <div>
              <img style={{ width: "100%" }} src="4.jpg" alt="" />
              <h3>Nordstrom Clone</h3>
              <p>
                Nordstrom is a leading fashion retailer offering compelling
                clothing, shoes, and accessories for men women, and kids.
              </p>
              <h4>Tech Stacks</h4>
              <p> ReactJS, chakraUI</p>
              <div
                style={{
                  display: "flex",
                  gap: "50px",

                  justifyContent: "center",
                }}
              >
                <a href="https://github.com/tirthorajbadhei/Nordstrom_Clone">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-github"
                  ></i>
                </a>
                <a href="https://nordstrom-tirthoraj.netlify.app/">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-solid fa-arrow-right-to-bracket"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm project" data-aos="fade-up">
            <div>
              <img style={{ width: "100%" }} src="2.jpg" alt="" />
              <h3>YouTube Clone</h3>
              <p>
                YouTube 2.0 Clone, where users can search and play any video
                they want
              </p>
              <h4>Tech Stacks</h4>
              <p>HTML, Javascript, Css</p>
              <div
                style={{
                  display: "flex",
                  gap: "50px",

                  justifyContent: "center",
                }}
              >
                <a href="https://github.com/tirthorajbadhei/YouTube">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-github"
                  ></i>
                </a>
                <a href="https://sensational-bunny-5315c0.netlify.app/">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-solid fa-arrow-right-to-bracket"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1
        id="scrollspyHeading2"
        style={{ textAlign: "center", color: " #ff014f" }}
      >
        <Typewriter
          words={["SKILLS"]}
          loop={0}
          cursor
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </h1>
      <br />
      <br />
      <br />
      <div className="container-fluid text-centerr">
        <div className="row">
          <div className="col-sm" data-aos="slide-right">
            <div className="mainSkill">
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/html-5.png"
                  alt="html"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/css-3.png"
                  alt="css"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/js.png"
                  alt="javascript"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/react.png"
                  alt="react"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/nodejs.png"
                  alt="nodejs"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/express2.png"
                  alt="expressJS"
                />
              </div>
              <div className="skill">
                <img
                  src="https://arjun-porfolio.vercel.app/assets/images/flaticon/mongodb.png"
                  alt="bootstrap"
                />
              </div>
              <div className="skill">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhIUFBESGBgSHBkYEhQUGBgUEh0YHBoZGh0cHBkcJS4lHiMrIRocNDgmKy8xNTU1HCQ7QD00Py40NTEBDAwMEA8QHxISHzQnJSQ/MT80MT84NjQ2NDQ0NDE0NDQ0NDQ/NDQxNDQ0NDQ0MTQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDBAj/xABIEAACAQIDBAUGCgkBCQEAAAABAgADBAUREgYhMZEHE0FRcSIyNVJhgRQWVHKDkqGzw9IjNEJzk7GywtFiFSUzRFN0gqLBJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAQEAAQQCAQQBBQEAAAAAAAABAgMREjEhMlEEFEFhEyIzcYGRI//aAAwDAQACEQMRAD8AisRE9NqREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERCSIiEEREBERAREQERO+ytHr1EpU11O50qOG/2nsAGZJ7hA6Jw1r6w5iXPs/sRa2qqXRa1XizuNSg/wClTuHjxklW2QbgiD2ACc+X1El8RXk+c+sX1hzEdYvrLzE+jfg6eqvIR8HT1V5CV+4/RyfOXWL6w5iOsX1hzE+jfg6eqvIR8HT1V5CPuP0cnzl1i+sOYjrF9YcxPo34OnqryEfB09VeQj7j9HJ85dYvrDmI6xfWHMT6N+Dp6q8hHwdPVXkI+4/RyfOYcHgRznKfQ1axpOCGpU2B4hlDDkRIHtfsImh61ouTKNTUB5jAcdA7D/p4Hsyl8PqJbtfBMorWIibrEREBERAREQEREBERAREQEREBERASedFForV7iqRvpqqr7NZOZ5J9pkDljdEfG8+i/vmet6VGXSyoiJwMyInHUO8QOUTjqHeI1DvEDlE46h3iZgZiIgIiIFDbV2i0b65QDJQ5ZQOADgPl/wC01EkG3npK68U+7pyPz0cPWNZ0RESwREQEREBERAREQEREBERAREQEsboj43n0X4krmWN0R8bz6L8SZa3pUZdLKiInCzYlFbYk/wC0LvefP7z6qy9ZRO2PpC7+f/as3+n9qtj20+pu9uZmdTd7fbLS6KVBtK2YH/GP3dOTnQO4cppnrccrNk3LZ86Cow/aYd28gzb4TtTeWrArXd1HGnVJdCO7fvX3ES8K1sjqVZFYHirKCp9xlJbZ4WlpeVKaDJGAdF46QRvHgCDl7MpOGpjn4sJd1ubOYyl9brWUZHPTUQnMq4yzGfbxBB7iJt5WnRJVOq7XPycqTZe09YD9gHKWXObUx45WRWzasxESiFH7eekrrxT7unI/JBt56SuvFPu6cj89HT9Y1nRERLBERAREQEREBERAREQEREBERASxuiPjefRfiSuZY3RHxvPovxJlrelRl0sqIicLNiUTtj6Qu/n/ANqy9pRO2PpC7+f/AGrN/p/arY9ph0aYpb0LWqtW4ooxqkgO6oSNFMZgMeGYPKTL4x2Py22/i0/8ymcJ2durtGehS1KraWOtF8rIHLJiOwie/wCI2JfJh/Ep/ml89PC5W3JNk3WfdbV2FNSxu6LZdlNxUY+wKuZlQbR4sb26etpID5LTXiwUblG7tPHIdpntfYjEVGfwYnwqUyeWqay1ubiyr6lBSrT3EOgLDxVxu8Rv9svp4Y4+cbvSSTpafR7gT2luz1V01LghmU+cqgeSp9u9ie7Vl2SXSK7F7VC/RlcKtamM2UZ6WXhqXPeN/EdmY75KpyZ8uV37VrMREqhR+3npK68U+7pyPyQbeekrrxT7unI/PR0/WNZ0RESwREQEREBERAREQEREBERAREQEsboj43n0X4krmWN0R8bz6L8SZa3pUZdLKiInCzYlE7Y+kLv5/wDasvaUTtj6Qu/n/wBqzf6f2q2PaedFH6pW/fH7unJ1K36NsWtre2qrWuKNNmqlgruqEjRTGYBPDMHlJj8ZrD5ba/xU/wAyurjblfBlPLbyvulexQ0aFfIalfqye9GV2yPgV3eJ75J6m1NgozN7be6orHkDmZW23e1CXzJTo6uqpEtqYFS7EZZhTvAAzyz37zu4SdHHLnLsYy7vBsRctTxC1IPnsUYd6spGXPI+6XlKT2AsGrX9EgeTRzqOewAAhfeWI5Hul2SfqPYy7ZiImCqj9vPSV14p93Tkfkg289JXXin3dOR+ejp+sazoiIlgiIgIiICIiAiIgIiICIiAiIgJY3RHxvPovxJXMsboj43n0X4ky1vSoy6WVEROFmxKZ2qwS7qX1y6W1dlZ81ZUYqRkN4IG+XNEvhncLvEy7KD+L198juf4b/4j4vX3yO5/hv8A4l+RNPuMvhPJQqbN3zHIWdx70KjmchNxhvR/fVSOsVaK9pdg7ZexVJz8CRLiiL9Rl+DlWn2fwGjY09FIEk73dt7ue8nuHYBuHvM3ERMLbbvVWYiYgUht56SuvFPu6cj8kG3npK68U+7pyPz0dP1jWdEREsEREBERAREQEREBERAREQEREBJp0YYitK6qUmIHwhQFJ9ZCSB7wW5SFzKOVIZSQVIKkHIgjeCD2GVzx5Y2Fm76OiVxs/wBIy6FS7VtQ3dcg1BvayDeD4Z59wkjXbjDj/wAyPelTP+mcN08peme1SSJHfjvhvypfqVPyx8d8N+VL9Sp+WRwy+KbVIokd+O+G/Kl+pU/LHx3w35Uv1Kn5Y4ZfFNqkUSO/HfDflS/Uqflj474b8qX6lT8scMvim1SKJHfjvhvypfqVPyx8d8N+VL9Sp+WOGXxTapFOFRwoJJAABJJ3AAcTI3V27w5RmLgt7FSpn9oAkG2s23e8U0aIanSPnlsuscdxy3KvsBOf2S2GlllekzGo/j98Li6uKw82oxK/NHkr9gE8ERO+TabLkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQE3exlBKmIWyuqsrM+pWAZTlTqHeDuO8DlNJN/sJ6StfnVPuqkrn60vSyMabCbLqxXt6C9bq0ZUA+enLPzVOXETXJjmAsQui3Ge7NrYqvvJTITPSHgNzeG2NCnr6sVNflKuWrRl5xGfAyHUtgsRZgpoooPFmqJpHtOkk8hObGY3He3ypNtkk212Pt1t3ubZAhpjWyof0bJ2kDsIG/du3StZbe2WIU7LDxal9VR6a0kH7RUAKzHuGQPvykC2Q2da/rFSxWnTANVh52/gq+05Hf2AGaaWdmNuXScb48tDEtW9r4LhzCi1CmzgDUBTFZxn6zN2+zPP2Tjc7MYfiVA1rPQjb9LICq6h+zUp9nIHfnv7Z/mndl2+U8lWRPfh2E1a9ytsq6XLFH1cE056yfDIyx62GYThVNeuRXduBdetquRlmQp3KOQ9stlqTHx3S3ZVMS17WywjFUdaVNUdRv0r1NVe45Dcw5iQ+zsLewv6lK/UPTVDoOhmDaipVgo3jcGHsIIjHVl3m3mfg3bS92QtkwwXYNXrDRp1N7DRqYKTuy4eUe2QSXrd1rQWAd1zturQhdJP6MhdI08eGW6V1Twy0xHEVp2oKUBTD1NKlGzVjqyDdp1IM/HumenqXa7olQ+Ja2IVsGw11ovbIXyBOVLrWAPDU7d+XDOYvNmbDEbbrrRURyD1bIOrUsvFGTgN4yzyzHHf22/mndl2+U8kB2VwxLu7pUKhYK2vVpIDeSjMMiQe0T27cYHSsa1NKRchk1HWQxz1EbsgO6SDo7uLAdQhp/8A7M6nl6Gzy8s5auHmbpvdsLrDKdRReUw1QoerOhmyXM9o4b5TLOzU/KN/Knolj9H+A21zZs1ahTdg7KGYHPIKuQ5kz3UrHCMMVaVdqLVSAXaonWuc+3SAdC9w3e+aXWktknlPJVUSw9j9k7eqj3dwAyMzmkhJFMIrMNTcM+ByHDIcvWMfwIt1fwalpJy1m3UU/HPLPL25RdXztJbsclYxJzt/stRtkW4oDSjsEenmSoJBIZc+A3cPDKbPYnZ20ubBXqUKbOxqLrIzYZMQDx7Iurjx5G/jdWcSzWvMEsG+DmitRl8mo5pisdXbqdu3vA4TnjmyNpd2/X2QRW0lk6vdTcDipXsO72ZHjH80/MshyVfECJqkiIgIiISTf7Cek7X51T7qpNBN/sJ6TtfnVPuqkrn63/aL0nHSFj9zZG2FBwvWCpqzVWz06MvOG7iZDxt7iIOfWofYaa5fYAZYu1Wy6YgaRaqydVqy0gNnq08c/mzQr0YUcxndVcu0BUB575zYZacx/q7UlmzdWZp4xh4aqig1Aw3b9DqSupSd43jP7JrOiqmFtax3ajWIb3ImX8zznuxTF7XCbUUabAuilaVINm5Y/tNlwGZJJPukN6PNoUtaj0qzZJXIIc+arjdmx7Aw7ezISJjbjduvwnbxUXxOoz167MTqZ3LZ8c9Rk36JqjdZcrv0lUYjs1ZsB9mfKe/aHYH4TWavQrIvWnU6sCVzO8spXv45e3jNlh1nbYHau1SrqZ97tlk7sBuVFz7N/Mky+WpjcOM7pbLHjwOigx3ECAMwikewsKRb7f5yJ9I9RmxGoGzyREVPm6dW7/yZp58G2laliBu3Byqs3XKu8hGPAd+nJfHTJ1tJs1RxVadxQroH06Q48qmy7yA2W8EEnmQR3P7ecuXwdVBdgqjLiNtpz8oure1TTYnPkD7pvOlpAK1q3aUqA+AZSP6mm82a2Tp4YXua9dCyqQG82kiniczxJ793d2yB7Y44L65Z1z0IAlLPcSoJJYjszJPuyk43nqcp1DurBxX0Cv8A29H+lJWuzeMtY3C1guoAFHXPIlGyzAPYcwCPCWjhtBL/AAinRWoBropTZhv0uqqCCM+8cO6RHDLOhhWIihdNTqJVpD9I6AIpZjkSGJyHkEE/6h2AyuFkmUv/ABE/KQ3GKYLiWk1mph8sgauqhUHblq3Aj3kb55MQ6P0amXs7lwcs1Vn1U28GXIjx3zs2k2CF1V663qU6eoLqplf0e4ZalK8Mxluy9vbNlgGHJg1rUNe5BDNrO7SgOWWlFzzJOXv3bpXeSf02/wCDf4QPYFGXE6KsCGXrQwPEEI4IPvmy6V/1qh+6/vaavZjE0/2sld8kWrUqk6iAF6wPpBPiwEnW2WyRvnp1FrhOrQqQU1gjPMZZEZds0yu2pLfhN7cOiz9Rb96/9KSq8QuGq1qtRjmzszMfEn+X/wAlp9Fn6i371/6UlS1fObxP8zJ0vfIndTnZnZW5uLcVKt5Wo0GUlKau29O0kE6VU7+w5jfOwYdgNAjVcvWKnzQzOpPd+jUA85JMH6rEcKWglTSTSWlU05FlZQBvXuOXvBkfs+jjq3D3FzT6qmdTaQVJA3+UzHJR38Zny3t5Xb9I3+W66UP1Bf3ifyacuj4lcLBXiDWI8QzZT37XYYb+zC0qiDetRWOZUqATuy7wZ4+jZwMNpk8A1Q+7UTKb/wDnt+z8KdDlt5OZO8k8STvJlpdE9Vjb3CnzUqAr4sozH2DnPDe9H6XD9daXNPqqvlKCCwAbf5LA7x3A5ZcJIQbfA7EjVqO8jPc9SqR2DsG4eAE11M8csdse027qnxpAt1dKvBatUL4B2ynjmXcuzMxzZiWY95JzJ5mYnTOliIiEkREBMqxBzBII4EHI85iIQ7PhL+vU+s3+YNxU/wCpU+s3+Z1xGwwBMxED022I16Q007isg9VKjqvJTlOmvWd21O7u3rOxduZ3zhEbBO62u6lIk06tRCeJR2Qnx0kZzpiB33N5Vq5dbVqPlw6x2fLw1E5ToiIHOjXdCStR0J4lGZCeRmKlRnObszH1mJZuZnGIHptsRr0hpp3FZB6qVHVeSnKdVxcVKh1VHdz2M7M55sTOuI2gTuW7qhdIq1QvDSHcLl83PKdMQOSVXUZK7AdwYgfZOMRA7Le4em2pHdG9ZGZW5qc52XN9Wq/8StVf2O7uOTEzzxGw9KYhXVNC3FZU9Rajqn1QcpavR8f91jxrf1NKhndTu6qDSlWoq+qruq7+O4HKZ56fKbIs3LK+rUVHVVqqZ8RTd0B8QpE4V671G1O7u3rOxdubb5wiabJIiISREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k="
                  alt="bootstrap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col-sm git">
            {" "}
            <p>
              <img
                style={{ width: "90%" }}
                align="left"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=tirthorajbadhei&show_icons=true&locale=en&layout=compact"
                alt="tirthorajbadhei"
              />
            </p>
          </div>
          <div className="col-sm git">
            {" "}
            <p>
              &nbsp;
              <img
                style={{ width: "100%" }}
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=tirthorajbadhei&show_icons=true&locale=en"
                alt="tirthorajbadhei"
              />
            </p>
          </div>
          <div className="col-sm git">
            {" "}
            <p>
              <img
                style={{ width: "100%" }}
                align="center"
                src="https://github-readme-streak-stats.herokuapp.com/?user=tirthorajbadhei&"
                alt="tirthorajbadhei"
              />
            </p>
          </div>
        </div>
      </div>
      <br />
      <GitHubCalendar
        style={{
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        htmlFor
        username="tirthorajbadhei"
      />
      <br />
      <br />
      <h1 style={{ fontSize: "60px", fontWeight: "700", textAlign: "center" }}>
        <Typewriter
          words={["CONTACT"]}
          loop={0}
          cursor
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </h1>
      <br />
      <div className="container text-center" id="scrollspyHeading4">
        <div className="row div">
          <div className="col-sm div1">
            <img style={{ width: "35%" }} src="tirthoraj.png" alt="" />
            <br />
            <br />
            <h1 style={{ fontWeight: "700", color: "#ff014f" }}>
              Tirthoraj Badhei
            </h1>
            <p>Full Stack Web Developer</p>
            <br />
            <p>I am available for Full Stack development. Let's Connect. </p>
            <p>Phone: +91-8583864946</p>
            <p>Email: tirthorajbadhei@gmail.com</p>
            <div className="icon">
              <div>
                <a href="https://github.com/tirthorajbadhei">
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-github"
                  ></i>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/tirthorajbadhei/">
                  {" "}
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="fa-brands fa-linkedin"
                  ></i>
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1Ah3ofjb-52aMtmKvWq-LxXtV7vlnkPBB/view?usp=share_link">
                  {" "}
                  <i
                    style={{ fontSize: "50px", color: "black" }}
                    className="icon1 fa-solid fa-envelope"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm div1">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Subject
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <br />
            <button
              onClick={handleAlert}
              style={{
                width: "45%",
                height: "15%",
                backgroundColor: "#ff014f",
                color: "white",
                border: "none",
                borderRadius: "20px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default Navbar;
