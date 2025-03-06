import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

export function useLoadingQueries() {
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoading = () => {
      // Konversi Map menjadi Array agar bisa pakai `.some()`
      const activeQueries = Array.from(client.getObservableQueries().values());

      // Cek apakah ada query yang masih loading
      const inFlightQueries = activeQueries.some((query) => query.getCurrentResult().loading);

      setIsLoading(inFlightQueries);
    };

    // Jalankan pertama kali untuk mengecek loading queries
    handleLoading();

    // Tambahkan listener untuk memantau perubahan di cache Apollo Client
    const observer = client.onClearStore(async () => {
      handleLoading();
      return Promise.resolve();
    });

    return () => observer(); // Cleanup observer saat unmount
  }, [client]);

  return isLoading;
}
