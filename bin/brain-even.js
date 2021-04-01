#!/usr/bin/env node
import { askName } from '../src/cli.js';
import { isEven } from '../src/even.js';

const main = () => {
    isEven();
  };
  
  main();