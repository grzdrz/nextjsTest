import React from 'react';
import { NextPage } from 'next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';

import { State } from '../root-reducer';

interface LandingProps {
  testText: string;
  test: CallableFunction;
}

const Landing: NextPage<LandingProps> = (props: LandingProps) => {
  const { testText, test } = props;
  // const dispatch = useDispatch();
  const clickHandler = () => {
    test();
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>{testText}</button>
      <Link href="/guide/components"><a>to the components page</a></Link>
    </>
  );
};

const mapStateToProps = (state: State) => ({ testText: state.default.testText });
const mapDispatchToProps = (dispatch: Dispatch) => ({ test: () => dispatch({ type: 'TEST' }) });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
