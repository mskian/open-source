import React, { Component } from "react";
import axios from "axios";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slugify from "slugify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import { saveAs } from "file-saver";

class RetrieveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      persons: [],
    };
  }
  componentDidMount() {
    if (document.getElementById("btnSignUp") != null) {
      document.getElementById("btnSignUp").addEventListener("click", (e) => {
        const name = document.getElementById("name").value;
        if (name == 0) {
          console.log("Empty Title or Message");
          toast.error("🤖 Empty Name", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
          return false;
        }
        const users = slugify(name, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: false,
          strict: false,
        });
        window.location.href = "?name=" + users;
      });
    }
    const GET_USER = new URL(window.location.href).searchParams.get("name");
    axios.get("https://wishes-five.vercel.app/" + GET_USER).then((res) => {
      const wishes = res.data;
      toast.success("😊 \n" + wishes[0].content, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      });
      console.log(wishes[0].content);
      this.setState({ isLoading: false, persons: wishes });
    });
  }
  PageToast() {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    });
  }

  render() {
    const wishername = this.state.persons.map((person) => person.content);
    const slugdata = this.state.persons.map((person) => person.slug);
    const pathname = typeof window !== "undefined" ? window.location.href : "";
    const sharetext = encodeURIComponent(
      wishername + " Sending you the Happy Diwali Greeting Wishes " + pathname
    );
    const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`;
    const Telegramshare =
      "https://telegram.me/share/url?url=" +
      pathname +
      "&text=" +
      wishername +
      " Sending you the Happy Diwali Greeting Wishes";
    const downloadImage = () => {
      saveAs(
        `https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=` +
          slugdata,
        `${slugdata}.png`
      );
    };
    return (
      <Layout>
        <Head>
          <title>{`${wishername} - Happy Diwali Wishes`}</title>
          <meta name="description" content={`${wishername} Sending you the Happy Diwali Greeting Wishes.`} data-rh="true" />
          <link rel="canonical" href={pathname} data-rh="true" />
          <meta property="og:url" content={pathname} data-rh="true" />
          <link rel="preconnect" href="https://images.weserv.nl/" crossorigin />
          <link rel="preconnect" href="https://img.sanweb.info/" crossorigin />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossorigin
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        </Head>
        <br />
        <div className="container">
          <div className="row">
            <div className={styles.centerthem}>
              <div className={clsx("col col--5")}>
                <div className="card-demo">
                  <div className="card">
                    <div className="card__header">
                      <img
                        className="card__image"
                        src={
                          `https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=` +
                          slugdata
                        }
                        alt={wishername}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className={styles.centerthem}>
                  <a
                    className="button button--outline button--active button--success"
                    onClick={downloadImage}
                  >
                    <span role="img" aria-label="download">
                      📥 Download image
                    </span>
                  </a>
                </div>
                <br />
                <div className="notification is-warning has-text-weight-bold">
                  <h3 className={styles.centerthem}>Create your Own</h3>
                  <div className={styles.centerthem}>
                    <div className="navbar__search">
                      <input
                        className="navbar__search-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        required
                      />
                    </div>
                    <br />
                    <button
                      id="btnSignUp"
                      className="button button--info"
                      type="submit"
                    >
                      Create Wish
                    </button>
                  </div>
                  <br />
                </div>
                <div className={styles.centerthem}>
                  <ToastContainer />
                  <CopyToClipboard
                    text={pathname}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <button
                      className="button button--outline button--active button--primary"
                      onClick={this.PageToast}
                    >
                      <span role="img" aria-label="clipboard">
                        📝 Copy URL
                      </span>
                    </button>
                  </CopyToClipboard>
                </div>
                <hr />
                <div className={styles.centerthem}>
                  <a
                    className="button button--outline button--active button--success"
                    href={Whatsappshare}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <span role="img" aria-label="burger">
                      ⏺ Whatsapp
                    </span>
                  </a>
                  &nbsp;
                  <a
                    className="button button--outline button--active button--info"
                    href={Telegramshare}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <span role="img" aria-label="bot">
                      ⏺ Telegram
                    </span>
                  </a>
                </div>
                <hr />
                <br />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default RetrieveList;
