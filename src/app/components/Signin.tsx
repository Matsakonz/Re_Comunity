"use client";

import { signIn } from "next-auth/react";

export default function Signin() {
    return (
        <div className="grid place-content-center h-screen">
            <div className="mockup-code max-w-[800px] max-h-[400px] text-[16px] ">
                <pre data-prefix="$"><code>cat Login_page.txt</code></pre>
                <pre data-prefix=">" className="text-warning"><code>This website is accessible only to students of robotics and automation.</code></pre>
                <pre data-prefix=">" className="text-warning"><code></code></pre>
                <pre data-prefix="$"><code>sudo -i</code></pre>
                <pre data-prefix=">"><code>[ sudo ] password for robotic:
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className="flex"><p className="text-info">Follow link</p><p className="text-base-content">(ctrl + click)</p></div>
                        </div>
                        <button className="link link-hover text-error ml-[15px]" onClick={() => signIn("google")}>http://signin:25565</button>
                    </div>
                    <div className="tooltip" data-tip="Follow link(ctrl + click)"></div>
                </code></pre>
                <pre data-prefix=">" className="text-warning"><code>waiting...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            </div>
        </div>
    );
}