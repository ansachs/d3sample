import * as React from "react";
import * as ReactTestLib from 'react-testing-library'
import {RootComponent} from "../RootComponent";
import {cleanup, render} from "react-testing-library";

describe("pie chart", function () {
    afterEach(() => {
       cleanup();
    });

    it('should mount', function () {
        const c = render(<RootComponent/>);

        console.error("=============> c.debug(): ", c.debug());

        expect(c.container.querySelectorAll(".arc")).toHaveLength(8)
    });

    it('should highlight on mouseenter', async function() {
        const mounted = render(<RootComponent/>);
        const slice = mounted.container.querySelector(".pie-chart__slice-Lifecycle");

        ReactTestLib.fireEvent(slice!,new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
        }));
        await ReactTestLib.wait(() => {
            expect(mounted.container.querySelector(".pie-chart__slice-Lifecycle")!.classList).toContain("selected")
        });

        ReactTestLib.fireEvent(slice!,new MouseEvent('mouseout', {
            bubbles: true,
            cancelable: true,
        }));
        await ReactTestLib.wait(() => {
            expect(mounted.container.querySelector(".pie-chart__slice-Lifecycle")!.classList).not.toContain("selected")
        })

    });
});