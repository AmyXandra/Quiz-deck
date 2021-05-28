import React from 'react';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
// import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Avatar } from "@progress/kendo-react-layout";


export default function Header(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  console.log("user", user.data.username)
  function initials(name){
    return name.charAt(0)
  }
  return (
    <React.Fragment>
      <AppBar>
        <AppBarSection>
          {props.children}
          <a href="/my-quizes"><h1 className="app-header-title">QuizDeck</h1></a>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          
          <div className="k-hbox">
            <Avatar
              shape="circle"
              type="text"
              style={{
                marginRight: 5,
              }}
            >
              {initials(user.data.username)}
            </Avatar>
            {/* <div>
              <h2
                style={{
                  fontSize: "1.3em",
                  fontWeight: "normal",
                  margin: 0,
                }}
              >
                {user.data.username}
              </h2>
            </div> */}

          </div>

        </AppBarSection>
      </AppBar>
      <style>{`
                body {
                    background: #fffff;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                .k-icon {
                    font-size: 18px;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
                .k-appbar .k-appbar-separator {
                    margin: 0 8px;
                }
                .k-drawer-item{
                  padding: 0.85rem 1rem;
                }
                .k-appbar {
                  padding: 0.8rem 1rem;
                }
            `}</style>
    </React.Fragment>
  )
}