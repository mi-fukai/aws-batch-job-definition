import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

import styles from "@/styles/modules/OffersSearchForm.module.css";
import { AutoCompleteTextField } from "@/components/AutoCompleteTextField";

interface TypeProps {
  defaultSearchText?: string;
  size?: "small" | "medium" | "large";
}

export const OffersSearchForm: React.VFC<TypeProps> = ({
  defaultSearchText = "hoge",
  size = "medium",
}: TypeProps) => {
  // 検索キーワード
  const [searchText, setSearchText] = useState(defaultSearchText);
  // 検索キーワードによるページ遷移
  const router = useRouter();
  const searchOfferContent = () => {
    router.push(`/${searchText}`);
  };
  // formでEnter押したときの挙動設定
  const handleSubmit = (event) => {
    searchOfferContent();
    event.preventDefault(); // デフォルトの遷移動作無効化
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.textfield}>
        <AutoCompleteTextField props={{ searchText, setSearchText }} />
      </div>
      <Button
        size={size}
        variant="contained"
        color="primary"
        onClick={searchOfferContent}
      >
        検索
      </Button>
    </form>
  );
};

export default OffersSearchForm;
