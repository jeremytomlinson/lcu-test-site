// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bNJjNc2NbC4jfBdycy75o8
// Component: ThexOuedbks1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: dbGVEXIYhu_f/component
import Button from "../../Button"; // plasmic-import: 9tG1OyZAVIis/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: XS8lqfxZhwLY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: bNJjNc2NbC4jfBdycy75o8/projectcss
import * as sty from "./PlasmicNavbar.module.css"; // plasmic-import: ThexOuedbks1/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__ebi1
        )}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            defaultcss.__wab_text,
            sty.text
          )}
        >
          {"LowCodeUnit"}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__uYXg7
          )}
        >
          <Button
            className={classNames("__wab_instance", sty.button__rzg65)}
            color={"navLink"}
            link={"/dashboard"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___6J8J7)}
            color={"darkGray"}
            link={"/dashboard"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__bagxe
            )}
          >
            <button
              className={classNames(
                defaultcss.button,
                projectcss.button,
                defaultcss.__wab_text,
                sty.button__hagt6
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__tXyhR)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo", "text"],
  logo: ["logo"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
