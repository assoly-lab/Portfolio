'use client'

import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero(){

    return (
        <div className="md:w-[80%] h-full flex flex-col md:flex-row gap-8 md:justify-center md:items-center" >
            <Reveal x={-100} scale={0.3} opacity={0} delay={0.3} >
                <div className="flex justify-center md:flex-1">
                    <svg className="w-auto h-auto md:w-[600px] md:h-[500px]" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.99 161.39"><defs><style>{".cls-1{fill:#8a3ffc;}.cls-2{fill:#3f3d56;}.cls-3{fill:#6c63ff;}.cls-4{fill:#2f2e41;}.cls-5{fill:#fff;}.cls-6{fill:#ffb6b6;}.cls-7{fill:#e6e6e6;}.cls-8{opacity:0.2;isolation:isolate;}"}</style></defs><path className="fill-[#8a3ffc] dark:fill-white" d="M131.84,17a57.43,57.43,0,0,1,35.83,23.68c8.12,12,10.8,27.15,17.71,43s17.77,32.39,12.51,42.89-26.87,15-42.48,19.35-25.23,8.32-36.63,15.39S94.24,178.14,83,177.1s-20.69-12.87-35.57-22.61S12.1,137,4.68,123.67,3.15,91.6,9.61,73.61,23.29,38.71,36.18,30,67.9,20.86,85,19.07,117.49,14,131.84,17Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M9,108.44a66.82,66.82,0,0,0,6.5,6.69l168.92.23a66.82,66.82,0,0,0,6.5-6.69Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M123.59,87v19.82a1,1,0,0,0,1,1H153.9a1,1,0,0,0,1-1V87a1,1,0,0,0-1-1H124.54A1,1,0,0,0,123.59,87Z" transform="translate(-1.29 -15.79)"/><path className="cls-3" d="M124.28,87.25v19.32a.51.51,0,0,0,.51.51h28.87a.51.51,0,0,0,.51-.51V87.25a.51.51,0,0,0-.51-.51H124.79A.51.51,0,0,0,124.28,87.25Z" transform="translate(-1.29 -15.79)"/><path className="cls-4" d="M123,110.69a.57.57,0,0,0,.45.21h31.44a.58.58,0,0,0,.57-.7l-.49-2.32a.58.58,0,0,0-.36-.42.56.56,0,0,0-.21,0H123.91a.56.56,0,0,0-.21,0,.58.58,0,0,0-.36.42l-.49,2.32A.58.58,0,0,0,123,110.69Z" transform="translate(-1.29 -15.79)"/><rect className="cls-2" x="151.9" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="149.96" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="148.03" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="146.09" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="144.15" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="142.22" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="140.28" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="138.34" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="136.4" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="134.47" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="132.53" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="130.59" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="128.66" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="126.72" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="124.78" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="122.85" y="92.06" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="151.92" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="149.99" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="148.05" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="146.11" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="144.17" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="142.24" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="140.3"  y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="138.36" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="136.43" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="134.49" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="132.55" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="130.62" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="128.68" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="126.74" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="124.81" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="122.87" y="93.02" width="0.97" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-2" x="135.85" y="94.19" width="7.75" height="0.58" rx="0.11" ry="0.11"/><rect className="cls-5" x="126.97" y="75.18" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="134.49" y="75.18" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="136.62" y="75.18" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="129.02" y="75.12" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="139.04" y="75.12" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="128.98" y="76.81" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="136.5" y="76.81" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="138.63" y="76.81" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="131.02" y="76.75" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="141.05" y="76.75" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="130.98" y="78.44" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="138.5" y="78.44" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="140.63" y="78.44" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="133.03" y="78.38" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="143.05" y="78.38" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="132.99" y="80.07" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="140.51" y="80.07" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="142.64" y="80.07" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="135.03" y="80.01" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="134.49" y="86.55" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="136.62" y="86.55" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="139.04" y="86.61" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="126.97" y="86.55" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="129.02" y="86.61" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="128.98" y="84.92" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="136.5" y="84.92" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="138.63" y="84.92" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="131.02" y="84.98" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="130.98" y="83.29" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="138.5" y="83.29" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="140.63" y="83.29" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="133.03" y="83.35" width="4.81" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="132.99" y="81.66" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="140.51" y="81.66" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="142.64" y="81.66" width="1.38" height="0.72" rx="0.36" ry="0.36"/><rect className="cls-5" x="135.03" y="81.72" width="4.81" height="0.72" rx="0.36" ry="0.36"/><path className="cls-6" d="M125.78,121.43l-3.09-4.88,9.69-7.72,4-4.43a4.43,4.43,0,0,1,7.5,1.58h0a4.43,4.43,0,0,1-2.68,5.55l-6.32,2.33Z" transform="translate(-1.29 -15.79)"/><path className="cls-4" d="M53.36,86.06v23.71H70V86.06a.8.8,0,0,0-.56-.76.73.73,0,0,0-.24,0h-15a.8.8,0,0,0-.8.8Zm6.48,8.15a1.77,1.77,0,0,1,3.55,0V97a1.77,1.77,0,0,1-3.55,0Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M53.31,109v2.29a.45.45,0,0,0,.45.45H69.58a.45.45,0,0,0,.45-.45V109Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M27.23,50.33v43.3a2.08,2.08,0,0,0,2.08,2.08H93.47a2.08,2.08,0,0,0,2.08-2.08V50.33a2.08,2.08,0,0,0-2.08-2.08H29.31A2.08,2.08,0,0,0,27.23,50.33Z" transform="translate(-1.29 -15.79)"/><path className="cls-5" d="M28.73,50.87V93.09a1.11,1.11,0,0,0,1.11,1.11H92.93A1.11,1.11,0,0,0,94,93.09V50.87a1.11,1.11,0,0,0-1.11-1.11H29.84A1.11,1.11,0,0,0,28.73,50.87Z" transform="translate(-1.29 -15.79)"/><path className="cls-4" d="M40.44,111.59a.68.68,0,0,0,.54.26H78.51a.69.69,0,0,0,.68-.83l-.58-2.77a.69.69,0,0,0-.43-.5.67.67,0,0,0-.25,0H41.56a.67.67,0,0,0-.25,0,.69.69,0,0,0-.43.5L40.3,111A.69.69,0,0,0,40.44,111.59Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M90.89,55.57h-59a.23.23,0,0,1,0-.47h59a.23.23,0,0,1,0,.47Z" transform="translate(-1.29 -15.79)"/><ellipse className="cls-2" cx="34.59" cy="36.71" rx="1.38" ry="1.41"/><ellipse className="cls-2" cx="39.34" cy="36.71" rx="1.38" ry="1.41"/><ellipse className="cls-2" cx="44.09" cy="36.71" rx="1.38" ry="1.41"/><path className="cls-2" d="M88,51.44H84.65a.26.26,0,0,0,0,.51H88a.26.26,0,0,0,0-.51Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M88,52.4H84.65a.26.26,0,0,0,0,.51H88a.26.26,0,0,0,0-.51Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M88,53.36H84.65a.26.26,0,0,0,0,.51H88a.26.26,0,0,0,0-.51Z" transform="translate(-1.29 -15.79)"/><path className="cls-4" d="M169.41,110a1.48,1.48,0,0,0,1.43,1l6.13-.16a1.46,1.46,0,0,0,1.38-1.08l.87-9.27a2.26,2.26,0,0,0,1,.2,2.23,2.23,0,0,0-.11-4.47,1.89,1.89,0,0,0-.4,0,1.51,1.51,0,0,0-1.13-.49l-9.42.24-.23,0A1.47,1.47,0,0,0,167.77,98Zm10-10.13.62-2.21a1.5,1.5,0,0,0,0-.78h.09a1.6,1.6,0,0,1,.07,3.19A1.5,1.5,0,0,1,179.39,99.88Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M168.9,96.07c.2,1.15,2.46,2,5.17,1.81,2.5-.11,4.54-1,4.91-2a1.39,1.39,0,0,0-.43-.06l-9.42.24Z" transform="translate(-1.29 -15.79)"/>
                    <path className="cls-3" d="M174.56,104.92l0,0,1.33-.87a.12.12,0,0,0,0-.16l0,0-1.38-.91a.12.12,0,1,0-.13.19l1.23.81-1.18.77a.12.12,0,0,0,.09.21Z" transform="translate(-1.29 -15.79)"/><path className="cls-3" d="M172.46,105a.12.12,0,0,0,0-.21l-1.23-.7,1.19-.88a.12.12,0,1,0-.14-.19L171,104a.12.12,0,0,0,0,.16l0,0,1.38.79A.12.12,0,0,0,172.46,105Z" transform="translate(-1.29 -15.79)"/><path className="cls-3" d="M174.43,105.68h0a.12.12,0,0,0,0-.16h0l-1.89-3.1a.12.12,0,0,0-.2.12l1.89,3.1A.12.12,0,0,0,174.43,105.68Z" transform="translate(-1.29 -15.79)"/><rect className="cls-3" x="56.16" y="52.54" width="11.73" height="2.51" rx="0.75" ry="0.75"/><rect className="cls-7" x="50.21" y="57.56" width="23.64" height="2.51" rx="0.75" ry="0.75"/><rect className="cls-7" x="50.21" y="62.57" width="23.64" height="2.51" rx="0.75" ry="0.75"/><path className="cls-2" d="M76.26,95.16l.05.16h0l1.51,4.59,1.74,5.29,3.27,9.93,0,1.54h0l.24,12.41-.67,1.68.76,2.76s-.35-4.17-2.22-1.78c-1.06,1.36-2.29,2.75-3.31,4.06q2.22.9,4.51,1.62l1,.31.21.06a61.7,61.7,0,0,0,15.57,2.5l.8,0h1.16l1.78,0a61.7,61.7,0,0,0,13-1.75c0-1.75-.11-3.8-.22-6-.05-1.07-1.24-2.24-1.31-3.36-.05-.84,1-1.64,1-2.5-.36-5.28-.81-3.25-1.14-7q-.05-.55-.09-1.05c-.21-2.4-.36-3.9-.36-3.9l1.42-8.94,2.23-14L117,91.5l-.19-.09L105,85.59l-.64-1.64A2.54,2.54,0,0,0,102,82.34l-7.74,0a2.53,2.53,0,0,0-2.06,1l-2.1,2.9Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M84.6,112.92l-1.75,3.75-1.2,2.56L79.59,130l-1,1.09-.88-3.87-9.25,2.05a7.87,7.87,0,0,1-.27-1.79l.16-.16c.15-.14.27-.27.27-.39-.11-6.38.21-17.23,2.85-23.81a13.88,13.88,0,0,1,1.62-3l.15-.21c1.22-1.71,2-3.39,3.08-4.58h0l0,0h0l7.5-4,.32,9,.23,6.5Z" transform="translate(-1.29 -15.79)"/><path className="cls-2" d="M111.65,114l2.19,4.69.76,1.63,2.06,10.78,1,1.09.89-3.87.42-.09,7.5-1.55,2.19,6.95a4.16,4.16,0,0,0-.75-5.2c-.15-.14-.27-.27-.27-.39.12-7.5-.33-21.2-4.48-26.84-1.32-1.79-2.11-3.57-3.25-4.82h0l-2.8-4.58L117,91.5l-.19-.1Z" transform="translate(-1.29 -15.79)"/><circle id="a657ec4b-47ce-4d2a-9c58-81a811696ca9" className="cls-6" cx="97.09" cy="54.02" r="10.3"/><path className="cls-4" d="M112.3,62.61a.87.87,0,0,0-.62-.28l.15-.43a.82.82,0,0,0-.92-1.09l-.56.11.05-.38a.82.82,0,0,0-1.09-.88.87.87,0,0,1-.75-.05.89.89,0,0,1-.44-.6l-.2-.95,0-.05a7.36,7.36,0,0,0-5-3.18,21.67,21.67,0,0,0-6,0,5.52,5.52,0,0,0-2.41.61,2.11,2.11,0,0,0-1.05,1.95,4.83,4.83,0,0,0-5.09,2.1,10.55,10.55,0,0,0-1.46,5.8c-.09,4.16.77,7.56,2.54,10.11.13.18.16.57.42.7L89.71,76c.29.14.58.37.47.62-.31.71,1.76,2.29,3.22,2.81a20,20,0,0,0,8.7.53l.09-.59c.9-.12,1.53-.36,1.71-.72s.58-.51.82-.73h0l0,0a3.88,3.88,0,0,0,1.51-2.63,7.55,7.55,0,0,0-.29-2.69c4.33.67-1.71-4.61,2.33-5.64l.14,0,.35-.09a6.12,6.12,0,0,0,1.55-.66,6,6,0,0,0,2.08-2.62A.79.79,0,0,0,112.3,62.61Z" transform="translate(-1.29 -15.79)"/><path className="cls-4" d="M134.82,114.72c0,.4,0,1,0,1.67v.3c0,1.29-.06,2.37-.11,3.57,0,.08,0,.16,0,.25-.06,1.67-.17,3.62-.34,6.71-.33,5.7-.89.78-1.47,2.78,0,.1-.06.22-.09.36a6.45,6.45,0,0,1-.43,1.46l-.92.53c-.88.49-1.77,1-2.66,1.4l-1.52.73-.24.11a62.63,62.63,0,0,1-8,3.07c-.54.16-1.07.32-1.61.46s-1.13.31-1.7.44a61.71,61.71,0,0,1-13,1.75c-.59,0-1.18,0-1.78,0H99.75l-.8,0a61.65,61.65,0,0,1-15.57-2.5l-.22-.06-1-.31q-2.29-.72-4.51-1.62-1.7-.68-3.35-1.47h0l-.7-.33-.09,0q-1.29-.63-2.56-1.32c-.71-1.63-1.71-1.94-2.33-3.38a6,6,0,0,1-.39-1.33v0c.06.86-.28-1.53,0,0v-.09c0-.08,0-.18,0-.31-.79-7.74-.74-16.6-1.09-23.9q0-.71-.07-1.35c0-.14,0-.28,0-.42l.06-.13,0,0,0,0,0,0v0l.07-.1,0,0,0,0,0,0,0,0,0,0,.06-.06a2.23,2.23,0,0,1,.26-.21l.1-.06a4.42,4.42,0,0,1,.73-.35l.27-.09.1,0,.15,0c.26-.08.55-.15.86-.21l.12,0,.17,0,.24,0c.69-.11,1.47-.19,2.33-.24h1l.72,0c.7,0,1.43,0,2.21,0l1.1,0h.07l1,0,.71,0,.68,0,.54,0,.46,0h.21l.34,0,.77.06.78.07.79.07h.08l.72.07.17,0,.7.08.21,0,.55.06.73.09.56.06.89.11.34,0,2.58.35c1.32.19,2.67.39,4,.61s2.72.45,4.09.7l1,.19.47.09.8.15.8.15,1,.19c2.1.42,4.19.86,6.23,1.32l1,.23,2,.47.54.13,1.32.34.08,0,1,.24,2.19.59,1.41.4,2,.61.49.15,1.43.46,1.09.37,1,.37.65.24.92.35.27.11.17.07.33.13.32.13.31.13.31.13.25.11.49.22.24.11.18.08.08,0,.18.09.4.19.5.26.48.26.07,0,.1.06.34.2.63.4.13.09.41.31h0l.13.1.11.09.33.31.1.1,0,0,.13.14,0,0,.15.19.07.1.08.12.06.1a1.68,1.68,0,0,1,.12.26,1.21,1.21,0,0,1,.06.19A1.35,1.35,0,0,1,134.82,114.72Z" transform="translate(-1.29 -15.79)"/><path className="cls-8" d="M134.82,114.72c0,.4,0,1,0,1.67,0,.1,0,.2,0,.3,0,1-.06,2.2-.11,3.57,0,.08,0,.16,0,.25-.06,1.67-.17,3.62-.34,6.71-.33,5.7-.89.78-1.47,2.78-1.59-1-3.32-2-5.18-3l-1-.57c-3.72-2.07-7.87-4.25-12.21-6.4l-.52-.25a308.77,308.77,0,0,0-29.55-12.87c-1.69-.62-3.31-1.17-4.83-1.66a53.7,53.7,0,0,0-8.11-2.05c-2.22-.32-3.75-.21-4.37.46q0-.71-.07-1.35l0-.42.05-.11v0l0,0,0,0,0,0,.07-.1.06-.07,0,0,0,0,0,0,.06-.06a2.23,2.23,0,0,1,.26-.21l.1-.06a4.42,4.42,0,0,1,.73-.35l.27-.09.1,0,.15,0c.26-.08.55-.15.86-.21l.29-.05.24,0c.69-.11,1.47-.19,2.33-.24h1l.72,0c.7,0,1.43,0,2.21,0l1.1,0h.07l1,0,.71,0,.68,0,.54,0,.46,0,.55,0,.77.06.78.07.79.07h.08l.72.07q2,.2,4.15.48l2.58.35c1.32.19,2.67.39,4,.61s2.72.45,4.09.7l1,.19,1.28.24.8.15,1,.19c2.1.42,4.19.86,6.23,1.32l1,.23,2,.47.54.13,1.32.33h0l.08,0,1,.25,2.19.59,1.41.4,2,.61.49.15,1.43.46,1.09.37,1,.37.65.24.92.35.27.11.49.2.32.13.31.13.31.13.25.11.49.22.24.11.18.08.08,0,.57.28.5.26.55.3.1.06.34.2.63.4.54.4h0l.23.19.33.31.1.1,0,0,.14.16.15.19.07.1.08.12.06.1a1.68,1.68,0,0,1,.12.26,1.4,1.4,0,0,1,.06.19A1.35,1.35,0,0,1,134.82,114.72Z" transform="translate(-1.29 -15.79)"/></svg>
                </div>
            </Reveal>
            <Reveal x={100} opacity={0} delay={0.3} >
                <div className="relative flex flex-col md:flex-1 gap-4 text-center z-30" >
                    <p className="text-gray-600 text-lg font-medium dark:text-gray-300">Hello, i&apos;m</p>
                    <p className="text-4xl font-semibold">Abdelmajid Alahyane</p>
                    <p className="text-2xl text-gray-600 font-semibold dark:text-gray-300">Fullstack Developer</p>
                    <div className="buttons flex gap-4 justify-center font-medium">
                        <button className="px-6 py-3 rounded-s-full rounded-e-full border-2 text-black bg-white border-gray-600 hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out">Download CV</button>
                        <Link href={'#projects'} className="text-white bg-[#8A3FFC] px-6 py-2 rounded-s-full rounded-e-full hover:bg-[#6C63FF] transition-all duration-300 ease-in-out flex justify-center items-center"
                        >See my work</Link>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}