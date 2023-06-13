"use client";

import { Database } from "@/types_db";
import { ReactNode, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
  children: ReactNode;
}

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [supabaseclient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseclient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
