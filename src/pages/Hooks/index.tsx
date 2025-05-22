import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const HooksTest = () => {
  const [num, setNum] = useState(1);

  //  useCallback 缓存函数 返回一个函数
  const addNum = useCallback(() => {
    setNum((prev) => prev + 1);
  }, []);

  // useMemo 返回一个值
  // const delayNum = useMemo(() => {
  //   if (num == 10) return num;
  // }, []);
  // console.log('delayNum', delayNum);

  // 如果 num > 10 做一些副作用，使用 useEffect
  useEffect(() => {
    if (num > 10) {
      console.log('num 大于 10，触发副作用');
      // 例如可以减回 0（仅演示）
      setNum(0);
    }
  }, [num]);

  useEffect(() => {
    console.log('useEffect - 组件挂载');
    return () => console.log('useEffect - 组件卸载', num);
  }, [num]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect - 组件挂载');
    return () => console.log('useLayoutEffect - 组件卸载', num);
  }, [num]);

  // const divRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (divRef.current) {
  //     console.log('divRef:', divRef.current);
  //   }
  // }, []);

  return (
    <PageContainer
      header={{
        title: 'Hooks 示例',
      }}
    >
      {/* <div ref={divRef}>hello</div> */}
      <Button onClick={addNum}>递增 {num}</Button>
    </PageContainer>
  );
};

export default HooksTest;
