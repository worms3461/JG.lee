import { Test, TestingModule } from '@nestjs/testing';
import { DbServerService } from './db_server.service';

describe('DbServerService', () => {
  let service: DbServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbServerService],
    }).compile();

    service = module.get<DbServerService>(DbServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
