import { LoggedUser } from "../../models/users/logged-user.model";
import { UserAccount } from "../../models/users/user-accounts.model";

export function mockAuthentication(user: LoggedUser): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === UserAccount.email && user.password === UserAccount.password) {
        user.username = UserAccount.username
        resolve(true);
      }
       else {
        reject(new Error("Credenciales de usuario inválidas"));
      }
    }, 1000);
  });
}