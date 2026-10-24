import { useCallback, useEffect, useState } from "react";
import type { ShareDuration, ShareLinkInfo } from "../../../../shared/share";
import { deleteShareLink, getShareLink, saveShareLink } from "../services/shareService";

type LoadStatus = "loading" | "ready" | "error";

export function useShareLink() {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [link, setLink] = useState<ShareLinkInfo | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    let isActive = true;
    getShareLink()
      .then((current) => {
        if (!isActive) return;
        setLink(current);
        setStatus("ready");
      })
      .catch(() => isActive && setStatus("error"));
    return () => {
      isActive = false;
    };
  }, []);

  const run = useCallback(async (action: () => Promise<ShareLinkInfo | null>) => {
    setIsBusy(true);
    setHasFailed(false);
    try {
      setLink(await action());
    } catch {
      setHasFailed(true);
    } finally {
      setIsBusy(false);
    }
  }, []);

  const save = useCallback(
    (days: ShareDuration, regenerate: boolean) => run(() => saveShareLink(days, regenerate)),
    [run],
  );

  const disable = useCallback(
    () =>
      run(async () => {
        await deleteShareLink();
        return null;
      }),
    [run],
  );

  return { status, link, isBusy, hasFailed, save, disable };
}
