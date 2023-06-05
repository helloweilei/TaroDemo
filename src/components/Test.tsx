import { eventCenter, useRouter } from "@tarojs/taro";
import { useCallback, useEffect } from "react";
import { View } from '@tarojs/components';

const Test = () => {

  const router = useRouter();

  const onShow = useCallback(() => {
    console.log('onReady');
  }, []);

  useEffect(() => {
    const onReadyId = router.onReady as string;
    eventCenter.on(onReadyId, onShow);

    return () => {
      eventCenter.off(onReadyId, onShow);
    };
  }, []);

  return <View>Just for test</View>;
};

export default Test;