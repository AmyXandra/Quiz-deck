import React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
  } from "@progress/kendo-react-layout";
  import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";


export default function MyQuizes() {
    return(
        <React.Fragment>
      <AppBar>
        <AppBarSection>
          <h1 className="title">QuizDeck</h1>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <button className="k-button k-button-clear">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </button>
          <span className="k-appbar-separator" />
          <button className="k-button k-button-clear">
            <span className="k-icon k-i-heart" />
          </button>
        </AppBarSection>
      </AppBar>
      <style>{`
                body {
                    background: #dfdfdf;
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
                .k-button {
                    padding: 0;
                }
            `}</style>
    </React.Fragment>
    )
}