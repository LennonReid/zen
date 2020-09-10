import { ApiConstants } from '@zen/api-interfaces';
import { IsNotEmpty, Length } from 'class-validator';

export class AuthPasswordResetConfirmationInput {
  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly newPassword: string;

  @IsNotEmpty()
  readonly token: string;
}
