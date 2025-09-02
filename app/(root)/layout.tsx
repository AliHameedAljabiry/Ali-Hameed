

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";


const RootLayout = async ({ children }: { children: ReactNode }) => {
     return (
         <main>
            <Header/>
            <div>{children}</div>
            <Footer />
        </main>
  );
}

export default RootLayout ;