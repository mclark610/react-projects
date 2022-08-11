/**
 * tests the login feature works.
 *  login valid
 *  login invalid
 *  get active login
 *  set active login
 */
/**
 * TODO today:
 * 1. implement logger
 * 2. implement login feature
 */

import { logger } from '../components/logger.js';
import {getUser,setUser} from '../data/mockData.js';

describe("Login - Get active login using mock-data", () => {

  test("the active login user default is empty ", () => {
    const userName = getUser();

    console.log("getUser returns: " + getUser());
    console.log("username type: " + typeof(userName));
    expect(userName).toBe("");
  })  

  test("set login name to admin",() => {
    setUser({
      id: 0,
      name: "admin",
      password: "password"
    });

    expect(getUser()).toBe("admin");
  })
})

