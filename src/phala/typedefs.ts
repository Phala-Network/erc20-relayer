import { RegistryTypes } from '@polkadot/types/types'

export const Types: RegistryTypes = {
    EthereumAddress: 'H160',
    EcdsaSignature: '[u8; 65]',
    EthereumTxHash: 'H256',
    WorkerStateEnum: {
        _enum: {
            Empty: null,
            Free: null,
            Gatekeeper: null,
            MiningPending: null,
            Mining: 'BlockNumber',
            MiningStopping: null
        }
    },
    WorkerInfo: {
        machineId: 'Vec<u8>',
        pubkey: 'Vec<u8>',
        lastUpdated: 'u64',
        state: 'WorkerStateEnum',
        score: 'Option<Score>'
    },
    Score: {
        overallScore: 'u32',
        features: 'Vec<u32>'
    },
    StashInfo: {
        controller: 'AccountId',
        payoutPrefs: 'PayoutPrefs'
    },
    PayoutPrefs: {
        commission: 'u32',
        target: 'AccountId'
    },
    BlockRewardInfo: {
        seed: 'U256',
        onlineTarget: 'U256',
        computeTarget: 'U256'
    },
    RoundInfo: {
        round: 'u32',
        startBlock: 'BlockNumber'
    },
    RoundStats: {
        round: 'u32',
        onlineWorkers: 'u32',
        computeWorkers: 'u32',
        fracTargetOnlineReward: 'u32',
        totalPower: 'u32',
        fracTargetComputeReward: 'u32'
    },
    MinerStatsDelta: {
        numWorker: 'i32',
        numPower: 'i32'
    },
    PayoutReason: {
        _enum: {
            OnlineReward: null,
            ComputeReward: null
        }
    }
}
